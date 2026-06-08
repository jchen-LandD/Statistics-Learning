// 統計學習應用程序

class StatisticsLearningApp {
    constructor() {
        this.currentUnit = null;
        this.completedUnits = new Set();
        this.answers = {};
        this.init();
    }

    init() {
        this.loadProgress();
        this.renderNavigation();
        this.attachEventListeners();
        this.showHomePage();
    }

    // 保存和加載進度
    saveProgress() {
        const progress = {
            currentUnit: this.currentUnit,
            completedUnits: Array.from(this.completedUnits),
            answers: this.answers
        };
        localStorage.setItem('statisticsLearningProgress', JSON.stringify(progress));
        this.updateProgressBar();
    }

    loadProgress() {
        const saved = localStorage.getItem('statisticsLearningProgress');
        if (saved) {
            const progress = JSON.parse(saved);
            this.currentUnit = progress.currentUnit;
            this.completedUnits = new Set(progress.completedUnits);
            this.answers = progress.answers;
        }
    }

    clearProgress() {
        localStorage.removeItem('statisticsLearningProgress');
        this.currentUnit = null;
        this.completedUnits.clear();
        this.answers = {};
    }

    // 導航構建
    renderNavigation() {
        const descriptiveNav = document.getElementById('descriptive-units');
        const inferentialNav = document.getElementById('inferential-units');

        descriptiveNav.innerHTML = '';
        inferentialNav.innerHTML = '';

        courseData.forEach(unit => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = unit.title;
            a.dataset.unitId = unit.id;

            if (this.currentUnit === unit.id) {
                a.classList.add('active');
            }
            if (this.completedUnits.has(unit.id)) {
                a.classList.add('completed');
            }

            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadUnit(unit.id);
            });

            li.appendChild(a);

            if (unit.section === '敘述統計基礎' || unit.section.includes('DESCRIPTIVE')) {
                descriptiveNav.appendChild(li);
            } else {
                inferentialNav.appendChild(li);
            }
        });
    }

    // 更新進度條
    updateProgressBar() {
        const total = courseData.length;
        const completed = this.completedUnits.size;
        const percentage = (completed / total) * 100;

        document.getElementById('progress-fill').style.width = percentage + '%';
        document.getElementById('progress-text').textContent = `${completed}/${total}`;
    }

    // 頁面切換
    showPage(pageId) {
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        document.getElementById(pageId).classList.add('active');
    }

    showHomePage() {
        this.showPage('home-page');
        document.getElementById('start-btn').addEventListener('click', () => {
            this.loadUnit(1);
        });
    }

    // 加載單元
    loadUnit(unitId) {
        const unit = courseData.find(u => u.id === unitId);
        if (!unit) return;

        this.currentUnit = unit.id;
        this.saveProgress();
        this.showPage('course-page');

        // 更新課程頭部
        document.getElementById('unit-title').textContent = unit.title;
        document.getElementById('section-badge').textContent = unit.section;
        document.getElementById('section-badge').className =
            'section-badge ' + (unit.section.includes('DESCRIPTIVE') || unit.section.includes('敘述統計基礎') ? 'descriptive' : 'inferential');
        document.getElementById('duration').textContent = `⏱️ ${unit.duration}`;

        // 渲染內容
        this.renderConcepts(unit);
        this.renderExample(unit);
        this.renderIndustrialExample(unit);
        this.renderVerification(unit);

        // 更新導航按鈕
        this.updateNavigationButtons(unitId);

        // 更新側邊欄活動狀態
        this.renderNavigation();

        // 重置選項卡
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.remove('active');
        });
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector('.tab-pane').classList.add('active');
        document.querySelector('.tab-btn').classList.add('active');
    }

    // 渲染概念
    renderConcepts(unit) {
        const container = document.getElementById('concepts-container');
        container.innerHTML = '';

        unit.concepts.forEach((concept, index) => {
            const div = document.createElement('div');
            div.className = 'concept-block';
            div.innerHTML = `
                <h3>${concept.title}</h3>
                ${concept.content}
            `;
            container.appendChild(div);
        });
    }

    // 渲染教育例子
    renderExample(unit) {
        const container = document.getElementById('example-container');
        container.innerHTML = '';

        const example = unit.example;
        let html = `
            <h3>${example.title}</h3>
            <p><strong>Background:</strong> ${example.description}</p>
        `;

        // Add chart containers
        html += `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                <div>
                    <h4>Histogram</h4>
                    <canvas id="example-histogram-chart" style="max-height: 400px;"></canvas>
                </div>
                <div>
                    <h4>Box Plot</h4>
                    <canvas id="example-boxplot-chart" style="width: 100%; height: 300px;"></canvas>
                </div>
            </div>
        `;

        // Add raw data table
        if (example.data) {
            html += `<h4>Raw Data</h4>`;
            html += `<div style="overflow-x: auto; margin: 1rem 0;">`;
            html += `<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">`;
            html += `<thead><tr style="background-color: #f0f0f0;">`;
            for (let i = 0; i < Math.ceil(example.data.length / 5); i++) {
                html += `<th style="border: 1px solid #ddd; padding: 0.5rem;">Position ${i + 1}</th>`;
            }
            html += `</tr></thead>`;
            html += `<tbody>`;
            for (let row = 0; row < 5; row++) {
                html += `<tr>`;
                for (let col = 0; col < Math.ceil(example.data.length / 5); col++) {
                    const index = col * 5 + row;
                    const value = index < example.data.length ? example.data[index] : '';
                    html += `<td style="border: 1px solid #ddd; padding: 0.5rem; text-align: center;">${value}</td>`;
                }
                html += `</tr>`;
            }
            html += `</tbody></table>`;
            html += `</div>`;
        }

        if (example.analysis) {
            html += `<div>${example.analysis}</div>`;
        }

        container.innerHTML = html;

        // Generate charts after HTML is rendered
        if (example.data) {
            setTimeout(() => this.generateHistogram(example.data, 'example-histogram-chart', 5), 100);
            setTimeout(() => this.generateBoxPlot(example.data, 'example-boxplot-chart'), 100);
        }
    }

    // 渲染工業例子
    renderIndustrialExample(unit) {
        const container = document.getElementById('industrial-container');
        container.innerHTML = '';

        const example = unit.industrialExample;
        let html = `
            <h3>${example.title}</h3>
            <p><strong>Background:</strong> ${example.description}</p>
        `;

        // Add chart containers
        html += `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
                <div>
                    <h4>Histogram</h4>
                    <canvas id="industrial-histogram-chart" style="max-height: 400px;"></canvas>
                </div>
                <div>
                    <h4>Box Plot</h4>
                    <canvas id="industrial-boxplot-chart" style="width: 100%; height: 300px;"></canvas>
                </div>
            </div>
        `;

        // Add raw data table
        if (example.data) {
            html += `<h4>Raw Data</h4>`;
            html += `<div style="overflow-x: auto; margin: 1rem 0;">`;
            html += `<table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">`;
            html += `<thead><tr style="background-color: #f0f0f0;">`;
            for (let i = 0; i < Math.ceil(example.data.length / 5); i++) {
                html += `<th style="border: 1px solid #ddd; padding: 0.5rem;">Position ${i + 1}</th>`;
            }
            html += `</tr></thead>`;
            html += `<tbody>`;
            for (let row = 0; row < 5; row++) {
                html += `<tr>`;
                for (let col = 0; col < Math.ceil(example.data.length / 5); col++) {
                    const index = col * 5 + row;
                    const value = index < example.data.length ? example.data[index] : '';
                    html += `<td style="border: 1px solid #ddd; padding: 0.5rem; text-align: center;">${value}</td>`;
                }
                html += `</tr>`;
            }
            html += `</tbody></table>`;
            html += `</div>`;
        }

        if (example.analysis) {
            html += `<div>${example.analysis}</div>`;
        }

        container.innerHTML = html;

        // Generate charts after HTML is rendered
        if (example.data) {
            setTimeout(() => this.generateHistogram(example.data, 'industrial-histogram-chart', 2), 100);
            setTimeout(() => this.generateBoxPlot(example.data, 'industrial-boxplot-chart'), 100);
        }
    }

    // Generate Histogram Chart using Canvas for proper histogram (no gaps between bins)
    generateHistogram(data, chartId, binSize = 5) {
        const canvas = document.getElementById(chartId);
        if (!canvas) return;

        // Wait for DOM to fully render
        setTimeout(() => {
            // Set canvas size
            const parent = canvas.parentElement;
            canvas.width = Math.max(parent.offsetWidth || 500, 500);
            canvas.height = 300;
            const min = Math.floor(Math.min(...data) / binSize) * binSize;
            const max = Math.ceil(Math.max(...data) / binSize) * binSize;
            const binCount = (max - min) / binSize;

            const bins = Array(binCount).fill(0);
            const labels = [];

            // Create bin labels and count values
            for (let i = 0; i < binCount; i++) {
                const binStart = min + i * binSize;
                const binEnd = binStart + binSize;
                labels.push(`${binStart}-${binEnd - 1}`);
            }

            data.forEach(value => {
                const binIndex = Math.floor((value - min) / binSize);
                if (binIndex >= 0 && binIndex < binCount) {
                    bins[binIndex]++;
                }
            });

            // Draw histogram on canvas
            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;
            const padding = 50;
            const maxFreq = Math.max(...bins);

            // Clear canvas
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, width, height);

            // Draw axes
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(padding, height - padding);
            ctx.lineTo(width - padding, height - padding);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(padding, padding);
            ctx.lineTo(padding, height - padding);
            ctx.stroke();

            // Draw y-axis labels and grid
            ctx.fillStyle = '#666';
            ctx.font = '12px Arial';
            ctx.textAlign = 'right';
            for (let i = 0; i <= 5; i++) {
                const yValue = (maxFreq / 5) * i;
                const y = height - padding - (yValue / maxFreq) * (height - 2 * padding);
                ctx.fillText(Math.round(yValue), padding - 10, y + 5);

                // Grid lines
                ctx.strokeStyle = '#eee';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(padding, y);
                ctx.lineTo(width - padding, y);
                ctx.stroke();
            }

            // Draw histogram bars (NO GAPS)
            const barWidth = (width - 2 * padding) / binCount;
            ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
            ctx.strokeStyle = 'rgba(59, 130, 246, 1)';
            ctx.lineWidth = 1;

            bins.forEach((frequency, index) => {
                const barHeight = (frequency / maxFreq) * (height - 2 * padding);
                const x = padding + index * barWidth;
                const y = height - padding - barHeight;

                // Draw bar with no gap
                ctx.fillRect(x, y, barWidth, barHeight);
                ctx.strokeRect(x, y, barWidth, barHeight);
            });

            // Draw x-axis labels
            ctx.fillStyle = '#333';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            labels.forEach((label, index) => {
                const x = padding + (index + 0.5) * barWidth;
                ctx.fillText(label, x, height - padding + 10);
            });

            // Draw axis titles
            ctx.font = 'bold 12px Arial';
            ctx.textAlign = 'center';
            ctx.fillText('Value Range', width / 2, height - 10);

            ctx.save();
            ctx.translate(15, height / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.textAlign = 'center';
            ctx.fillText('Frequency', 0, 0);
            ctx.restore();
        }, 50);
    }

    // Generate Box Plot Chart
    generateBoxPlot(data, chartId) {
        const canvas = document.getElementById(chartId);
        if (!canvas) return;

        // Wait for DOM to fully render before getting dimensions
        setTimeout(() => {
            // Set canvas size with fallback values
            const parent = canvas.parentElement;
            canvas.width = Math.max(parent.offsetWidth || 400, 400);
            canvas.height = 300;

            // Calculate statistics
            const sorted = [...data].sort((a, b) => a - b);
            const n = sorted.length;

            const min = sorted[0];
            const max = sorted[n - 1];
            const q1 = sorted[Math.floor(n * 0.25)];
            const median = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[Math.floor(n / 2)];
            const q3 = sorted[Math.floor(n * 0.75) + 1] || sorted[Math.floor(n * 0.75)];

            const ctx = canvas.getContext('2d');
            const width = canvas.width;
            const height = canvas.height;

            // Clear canvas
            ctx.fillStyle = 'white';
            ctx.fillRect(0, 0, width, height);

            // Draw axis
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(50, height / 2);
            ctx.lineTo(width - 20, height / 2);
            ctx.stroke();

            // Map data to canvas coordinates
            const dataMin = min - 5;
            const dataMax = max + 5;
            const xStart = 80;
            const xEnd = width - 40;
            const yCenter = height / 2;
            const boxHeight = 60;

            const mapValue = (val) => xStart + ((val - dataMin) / (dataMax - dataMin)) * (xEnd - xStart);

            // Draw whiskers (min-max line)
            ctx.strokeStyle = '#666';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(mapValue(min), yCenter);
            ctx.lineTo(mapValue(max), yCenter);
            ctx.stroke();

            // Draw whisker caps
            ctx.beginPath();
            ctx.moveTo(mapValue(min), yCenter - 10);
            ctx.lineTo(mapValue(min), yCenter + 10);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(mapValue(max), yCenter - 10);
            ctx.lineTo(mapValue(max), yCenter + 10);
            ctx.stroke();

            // Draw box (Q1 to Q3)
            ctx.fillStyle = 'rgba(59, 130, 246, 0.7)';
            ctx.strokeStyle = '#3B82F6';
            ctx.lineWidth = 2;
            ctx.fillRect(mapValue(q1), yCenter - boxHeight / 2, mapValue(q3) - mapValue(q1), boxHeight);
            ctx.strokeRect(mapValue(q1), yCenter - boxHeight / 2, mapValue(q3) - mapValue(q1), boxHeight);

            // Draw median line
            ctx.strokeStyle = '#EF4444';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(mapValue(median), yCenter - boxHeight / 2);
            ctx.lineTo(mapValue(median), yCenter + boxHeight / 2);
            ctx.stroke();

            // Draw labels with proper spacing to avoid overlap
            ctx.fillStyle = '#333';
            ctx.font = 'bold 11px Arial';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';

            // Top labels at different heights
            const topLine1 = yCenter - boxHeight / 2 - 35;   // Min and Max
            const topLine2 = yCenter - boxHeight / 2 - 18;   // Median
            const bottomLine = yCenter + boxHeight / 2 + 35;  // Q1 and Q3

            // Min (top left)
            ctx.fillText(`Min: ${min}`, mapValue(min), topLine1);

            // Max (top right)
            ctx.fillText(`Max: ${max}`, mapValue(max), topLine1);

            // Median (middle top, lower than Min/Max to avoid overlap)
            ctx.fillText(`Median: ${median.toFixed(1)}`, mapValue(median), topLine2);

            // Q1 and Q3 (bottom, well separated)
            ctx.textBaseline = 'top';
            ctx.fillText(`Q1: ${q1}`, mapValue(q1), bottomLine);
            ctx.fillText(`Q3: ${q3}`, mapValue(q3), bottomLine);
        }, 50);
    }

    // 渲染驗證問題
    renderVerification(unit) {
        const container = document.getElementById('verification-container');
        container.innerHTML = '';

        unit.verification.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question-block';

            let questionHtml = `
                <div class="question-type">Question ${index + 1}</div>
                <h4>${question.question}</h4>
            `;

            if (question.type === 'multiple-choice') {
                questionHtml += '<div class="options">';
                question.options.forEach((option, optIndex) => {
                    const id = `q${index}_opt${optIndex}`;
                    questionHtml += `
                        <label class="option-label">
                            <input type="radio" name="q${index}" value="${optIndex}" id="${id}">
                            <span>${String.fromCharCode(65 + optIndex)}. ${option}</span>
                        </label>
                    `;
                });
                questionHtml += '</div>';
            } else if (question.type === 'calculation') {
                questionHtml += `
                    <input type="number"
                           class="calculation-input"
                           id="q${index}_input"
                           placeholder="Enter your answer"
                           step="any">
                `;
            }

            questionDiv.innerHTML = questionHtml;
            container.appendChild(questionDiv);
        });

        // 提交按鈕
        const submitBtn = document.createElement('button');
        submitBtn.className = 'btn btn-primary submit-verification';
        submitBtn.textContent = 'Submit Answers';
        submitBtn.addEventListener('click', () => this.verifyAnswers(unit));
        container.appendChild(submitBtn);

        // 結果顯示區域
        const resultDiv = document.createElement('div');
        resultDiv.id = 'verification-result';
        resultDiv.className = 'verification-result hidden';
        container.appendChild(resultDiv);
    }

    // 驗證答案
    verifyAnswers(unit) {
        const verification = unit.verification;
        let allCorrect = true;
        let correctCount = 0;
        let results = [];

        verification.forEach((question, index) => {
            let isCorrect = false;

            if (question.type === 'multiple-choice') {
                const selected = document.querySelector(`input[name="q${index}"]:checked`);
                if (selected) {
                    isCorrect = parseInt(selected.value) === question.correct;
                }
            } else if (question.type === 'calculation') {
                const input = document.getElementById(`q${index}_input`);
                if (input.value) {
                    const userAnswer = parseFloat(input.value);
                    isCorrect = Math.abs(userAnswer - question.correctAnswer) <= (question.tolerance || 0.1);
                }
            }

            if (isCorrect) {
                correctCount++;
            } else {
                allCorrect = false;
            }

            results.push({
                index: index + 1,
                isCorrect: isCorrect,
                explanation: question.explanation,
                question: question.question
            });
        });

        this.showVerificationResult(allCorrect, correctCount, verification.length, results, unit);
    }

    // 顯示驗證結果
    showVerificationResult(allCorrect, correct, total, results, unit) {
        const resultDiv = document.getElementById('verification-result');
        resultDiv.classList.remove('hidden');
        resultDiv.className = `verification-result ${allCorrect ? 'success' : 'error'}`;

        let html = '';
        if (allCorrect) {
            // 標記為已完成
            this.completedUnits.add(unit.id);
            this.saveProgress();
            this.renderNavigation();
            this.updateProgressBar();

            // 檢查是否為最後一個單元
            if (unit.id === courseData.length) {
                // 最後一個單元完成的特殊訊息
                html += `
                    <div class="result-header">🎉 Congratulations! Course Completed!</div>
                    <div class="result-message">
                        <p style="font-size: 1.1rem; margin: 1rem 0;">You have successfully completed all 7 units of the <strong>Statistics Fundamentals Course</strong>!</p>
                        <p>From the foundational concepts of descriptive statistics to hypothesis testing and two-sample tests in inferential statistics, you have mastered the core knowledge of statistics.</p>
                    </div>
                    <div style="margin: 1.5rem 0; padding: 1rem; background: #f0f9ff; border-radius: 0.5rem; border-left: 4px solid #3b82f6;">
                        <strong>✓ Key Concepts You've Mastered:</strong>
                        <ul style="margin: 0.5rem 0 0 1rem;">
                            <li>Descriptive statistics: data organization and statistical measures</li>
                            <li>Normal distribution and standardization applications</li>
                            <li>Sampling distribution and the Central Limit Theorem</li>
                            <li>Confidence interval estimation methods</li>
                            <li>Complete hypothesis testing procedure</li>
                            <li>Single and two-sample statistical tests</li>
                        </ul>
                    </div>
                    <div style="margin: 1rem 0; padding: 1rem; background: #fff7ed; border-radius: 0.5rem; border-left: 4px solid #f59e0b;">
                        <strong>💡 Next Steps:</strong>
                        <ul style="margin: 0.5rem 0 0 1rem;">
                            <li>Apply these statistical concepts to work and learning</li>
                            <li>Review any units that need reinforcement</li>
                            <li>Explore advanced statistical topics (e.g., regression analysis, time series)</li>
                            <li>Practice with statistical tools (R, Python, Excel)</li>
                        </ul>
                    </div>
                `;
            } else {
                // Non-final unit message
                html += `
                    <div class="result-header">✓ Congratulations! All Answers Correct!</div>
                    <div class="result-message">You have mastered the core concepts of this unit.</div>
                    <div class="result-message">Ready to proceed to the next unit?</div>
                `;
            }
        } else {
            html += `
                <div class="result-header">✗ Some Answers Incorrect</div>
                <div class="result-message">You got ${correct} / ${total} correct. Please review the explanations below:</div>
            `;
        }

        // 顯示詳細結果
        html += '<div style="margin-top: 1rem;">';
        results.forEach(result => {
            const icon = result.isCorrect ? '✓' : '✗';
            const color = result.isCorrect ? 'green' : 'red';
            html += `
                <div style="margin-bottom: 0.75rem; padding: 0.75rem; background: ${result.isCorrect ? '#dcfce7' : '#fee2e2'}; border-radius: 0.5rem;">
                    <strong style="color: ${color};">${icon} Question ${result.index}</strong>
                    <div style="font-size: 0.9rem; margin-top: 0.25rem;">
                        <div>Question: ${result.question}</div>
                        <div style="margin-top: 0.5rem;">Explanation: ${result.explanation}</div>
                    </div>
                </div>
            `;
        });
        html += '</div>';

        if (!allCorrect) {
            html += `
                <div class="result-explanation">
                    I recommend reviewing the concepts and examples of this unit again, then resubmit your answers.
                </div>
            `;
        }

        // 在最後一個單元完成後添加特殊按鈕
        if (allCorrect && unit.id === courseData.length) {
            html += `
                <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
                    <button class="btn btn-primary" id="completion-page-btn" style="padding: 1rem 2rem; font-size: 1.05rem;">
                        View Completion Summary →
                    </button>
                    <button class="btn btn-secondary" id="review-all-btn" style="padding: 1rem 2rem; font-size: 1.05rem;">
                        Review All Units
                    </button>
                </div>
            `;
        }

        resultDiv.innerHTML = html;

        // 為完成頁面按鈕添加事件監聽
        if (allCorrect && unit.id === courseData.length) {
            document.getElementById('completion-page-btn').addEventListener('click', () => {
                this.showCompletionPage();
            });
            document.getElementById('review-all-btn').addEventListener('click', () => {
                this.loadUnit(1);
                window.scrollTo(0, 0);
            });
        }

        // 滾動到結果區域
        resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // 更新導航按鈕
    updateNavigationButtons(unitId) {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');

        prevBtn.disabled = unitId === 1;
        // 最後一個單元也可以按下一步（進入完成頁面）
        nextBtn.disabled = false;
        nextBtn.textContent = unitId === courseData.length ? 'View Completion Summary →' : 'Next Unit ➜';

        prevBtn.onclick = () => {
            if (unitId > 1) {
                this.loadUnit(unitId - 1);
                window.scrollTo(0, 0);
            }
        };

        nextBtn.onclick = () => {
            if (this.completedUnits.has(unitId)) {
                if (unitId < courseData.length) {
                    this.loadUnit(unitId + 1);
                    window.scrollTo(0, 0);
                } else {
                    this.showCompletionPage();
                }
            } else {
                alert('Please complete the practice questions of this unit before proceeding to the next unit.');
            }
        };
    }

    // 顯示完成頁面
    showCompletionPage() {
        this.showPage('completion-page');

        document.getElementById('review-btn').onclick = () => {
            this.showPage('course-page');
            this.loadUnit(1);
        };

        document.getElementById('restart-btn').onclick = () => {
            this.clearProgress();
            this.renderNavigation();
            this.updateProgressBar();
            this.showHomePage();
        };
    }

    // 附加事件監聽器
    attachEventListeners() {
        // 選項卡切換
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tabName = btn.dataset.tab;

                // 移除所有活動狀態
                document.querySelectorAll('.tab-btn').forEach(b => {
                    b.classList.remove('active');
                });
                document.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });

                // 添加活動狀態
                btn.classList.add('active');
                document.getElementById(tabName).classList.add('active');
            });
        });
    }
}

// 初始化應用
document.addEventListener('DOMContentLoaded', () => {
    new StatisticsLearningApp();
});
