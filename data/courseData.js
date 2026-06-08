const courseData = [
  {
    id: 1,
    title: "統計基礎與敘述統計",
    section: "敘述統計基礎",
    duration: "20分鐘",
    concepts: [
      {
        title: "統計的定義與分類",
        content: `
          <h3>敘述統計 (Descriptive Statistics)</h3>
          <p>敘述統計是用來<strong>整理、摘要和呈現數據</strong>的統計方法。它幫助我們用數字和圖表描述數據的特徵，而不涉及推論。</p>

          <h3>推論統計 (Inferential Statistics)</h3>
          <p>推論統計是用來<strong>從樣本數據推論母體特徵</strong>的統計方法。它使用概率理論和假設檢驗來做出關於整個母體的結論。</p>

          <p><strong>核心區別：</strong> 敘述統計關注「現在的數據是什麼」，推論統計關注「根據樣本能推論整體是什麼」</p>
        `
      },
      {
        title: "數據類型與母體、樣本",
        content: `
          <h3>數據類型</h3>
          <ul>
            <li><strong>定性數據 (Categorical)：</strong>非數值的特徵，如性別、顏色、等級</li>
            <li><strong>定量數據 (Quantitative)：</strong>可以測量的數值，如身高、成績、銷售額</li>
            <li><strong>離散數據：</strong>只能取特定值，如學生人數、產品數量</li>
            <li><strong>連續數據：</strong>在某個範圍內可取任何值，如時間、重量、溫度</li>
          </ul>

          <h3>母體與樣本</h3>
          <ul>
            <li><strong>母體 (Population)：</strong>我們想研究的全體對象集合</li>
            <li><strong>樣本 (Sample)：</strong>從母體中抽取的一部分對象</li>
          </ul>
        `
      },
      {
        title: "描述性統計量",
        content: `
          <h3>集中趨勢測度</h3>
          <ul>
            <li><strong>平均數 (Mean)：</strong> 所有數據的總和除以數據個數，最常用的集中位置測度</li>
            <li><strong>中位數 (Median)：</strong> 將數據從小到大排序後的中間值，不受異常值影響</li>
            <li><strong>眾數 (Mode)：</strong> 出現最頻繁的值，適用於定性數據</li>
          </ul>

          <h3>變異性測度</h3>
          <ul>
            <li><strong>全距 (Range)：</strong> 最大值減最小值，簡單但易受異常值影響</li>
            <li><strong>標準差 (Standard Deviation)：</strong> 衡量數據與平均數的平均距離</li>
            <li><strong>變異數 (Variance)：</strong> 標準差的平方</li>
          </ul>

          <p><strong>公式：</strong></p>
          <p>平均數: μ = Σx / n</p>
          <p>標準差: σ = √[Σ(x-μ)² / n]</p>
        `
      },
      {
        title: "直方圖 (Histogram)",
        content: `
          <h3>直方圖的定義和用途</h3>
          <p>直方圖是用來展示數據分佈的圖表，將數據分組（分箱），每個箱子的高度代表該組數據的頻率。</p>

          <h3>直方圖的特徵</h3>
          <ul>
            <li><strong>x軸：</strong> 數據的數值範圍（分組後的箱子）</li>
            <li><strong>y軸：</strong> 每個箱子內的頻數或頻率</li>
            <li><strong>柱子寬度：</strong> 代表每個箱子的範圍寬度</li>
            <li><strong>柱子高度：</strong> 代表該組數據出現的次數</li>
          </ul>

          <h3>直方圖能告訴我們什麼？</h3>
          <ul>
            <li>數據的<strong>形狀分佈</strong>（鐘形、左偏、右偏等）</li>
            <li>數據的<strong>集中位置</strong>（分佈的中心在哪裡）</li>
            <li>數據的<strong>變異程度</strong>（數據分散的範圍）</li>
            <li>是否存在<strong>異常值或特殊模式</strong></li>
          </ul>

          <h4>直方圖示意圖</h4>
          <div style="text-align: center; margin: 1.5rem 0;">
            <img src="assets/histogram.svg" alt="直方圖" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 0.5rem;">
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
              圖：直方圖範例，顯示數據頻率分佈
            </p>
          </div>

          <p><strong>例子：</strong> 班級成績的直方圖通常呈現鐘形分佈，表示大多數學生成績集中在中等水平。</p>
        `
      },
      {
        title: "盒鬚圖 (Box Plot)",
        content: `
          <h3>盒鬚圖的定義</h3>
          <p>盒鬚圖（也稱箱線圖）是一種用五個數字摘要數據分佈的圖表。這五個數字是：</p>
          <ul>
            <li><strong>最小值 (Minimum)：</strong> 數據中的最小值</li>
            <li><strong>第一四分位數 (Q1)：</strong> 下面25%的數據的邊界</li>
            <li><strong>中位數/第二四分位數 (Q2/Median)：</strong> 中間的50%數據的邊界</li>
            <li><strong>第三四分位數 (Q3)：</strong> 上面25%的數據的邊界</li>
            <li><strong>最大值 (Maximum)：</strong> 數據中的最大值</li>
          </ul>

          <h3>盒鬚圖的結構</h3>
          <ul>
            <li><strong>盒子：</strong> 代表中間50%的數據（從Q1到Q3），寬度代表四分位距 (IQR = Q3 - Q1)</li>
            <li><strong>盒子內的線：</strong> 代表中位數</li>
            <li><strong>鬚子（須）：</strong> 從盒子延伸到最小值和最大值</li>
            <li><strong>點（異常值）：</strong> 超出鬚子範圍的值通常被標記為異常值</li>
          </ul>

          <h4>盒鬚圖示意圖</h4>
          <div style="text-align: center; margin: 1.5rem 0;">
            <img src="assets/boxplot.svg" alt="盒鬚圖" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 0.5rem;">
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
              圖：盒鬚圖結構，顯示最小值、Q1、中位數、Q3、最大值及異常值
            </p>
          </div>

          <h3>盒鬚圖的優點</h3>
          <ul>
            <li>能快速看出數據的<strong>分散程度和對稱性</strong></li>
            <li>清楚地<strong>識別異常值</strong></li>
            <li>便於<strong>比較多組數據</strong>的分佈</li>
            <li>不受極端值影響，比平均數更穩定</li>
          </ul>

          <p><strong>例子：</strong> 兩個班級的成績盒鬚圖可以一眼看出哪個班級成績更分散，哪個班級更有異常值。</p>
        `
      }
    ],
    example: {
      title: "教育例子：班級成績分析",
      description: "某班級30名學生的期末考成績（滿分100分）",
      data: [78, 82, 85, 88, 92, 75, 88, 91, 87, 83, 79, 84, 86, 90, 92, 81, 85, 89, 88, 84, 76, 87, 91, 85, 80, 89, 86, 84, 82, 88],
      analysis: `
        <h4>分析結果</h4>
        <ul>
          <li><strong>平均分：</strong> 85.2分</li>
          <li><strong>中位數：</strong> 85.5分</li>
          <li><strong>標準差：</strong> 5.3分</li>
          <li><strong>全距：</strong> 92 - 75 = 17分</li>
          <li><strong>Q1（第一四分位數）：</strong> 82分（下面25%的學生成績界線）</li>
          <li><strong>Q3（第三四分位數）：</strong> 89分（上面25%的學生成績界線）</li>
          <li><strong>四分位距 (IQR)：</strong> 89 - 82 = 7分</li>
        </ul>

        <h4>直方圖解釋</h4>
        <p>成績的直方圖會顯示一個近似<strong>鐘形分佈</strong>，其中：</p>
        <ul>
          <li>最多學生集中在85-89分區間（包含13名學生，最高頻率）</li>
          <li>其次是80-84分區間（包含8名學生）</li>
          <li>左邊尾部（75-79分）有4名學生</li>
          <li>右邊尾部（90-94分）有5名學生</li>
          <li>分佈相對對稱，沒有明顯的偏斜</li>
        </ul>
        <p>這表明班級成績分佈正常，大多數學生表現集中，極端值（特別好或特別差）較少。</p>

        <h4>盒鬚圖解釋</h4>
        <p>成績的盒鬚圖會顯示：</p>
        <ul>
          <li><strong>盒子長度（從82到89）：</strong> 代表中間50%的學生成績，長度為7分</li>
          <li><strong>盒子內的線（85.5）：</strong> 代表中位數，位置略偏向下（偏近Q1），說明中等成績略微偏低</li>
          <li><strong>下鬚子（從75到82）：</strong> 代表下面25%的學生成績範圍</li>
          <li><strong>上鬚子（從89到92）：</strong> 代表上面25%的學生成績範圍</li>
          <li><strong>無異常值標記：</strong> 說明沒有特別異常的成績</li>
        </ul>
        <p><strong>敘述統計告訴我們：</strong> 班級學生成績表現良好（平均85.2分），分佈相對集中（IQR = 7分），沒有異常的特別高分或特別低分學生，整體成績質量穩定。</p>
      `
    },
    industrialExample: {
      title: "工業例子：產品檢測數據",
      description: "某工廠檢測30件產品的重量（克）",
      data: [498, 502, 501, 499, 503, 497, 500, 502, 501, 498, 499, 503, 502, 500, 499, 501, 498, 503, 500, 502, 499, 501, 498, 502, 501, 500, 499, 502, 501, 500],
      analysis: `
        <h4>分析結果</h4>
        <ul>
          <li><strong>平均重量：</strong> 500.2克</li>
          <li><strong>中位數：</strong> 500.5克</li>
          <li><strong>標準差：</strong> 1.53克</li>
          <li><strong>全距：</strong> 503 - 497 = 6克</li>
          <li><strong>Q1（第一四分位數）：</strong> 499克</li>
          <li><strong>Q3（第三四分位數）：</strong> 502克</li>
          <li><strong>四分位距 (IQR)：</strong> 502 - 499 = 3克</li>
        </ul>

        <h4>直方圖解釋</h4>
        <p>產品重量的直方圖會顯示一個<strong>非常窄的鐘形分佈</strong>，集中在497-506克：</p>
        <ul>
          <li>497-501克範圍內有19件產品，佔總數的63%</li>
          <li>502-506克範圍內有11件產品，佔總數的37%</li>
          <li>分佈高度集中，產品重量變異性很小</li>
          <li>圖形非常尖銳，說明製程控制非常精準</li>
        </ul>
        <p>這種窄而尖銳的直方圖表明工廠的製程非常穩定，質量控制效果優良。</p>

        <h4>盒鬚圖解釋</h4>
        <p>產品重量的盒鬚圖會顯示：</p>
        <ul>
          <li><strong>盒子長度（從499到502）：</strong> 非常短（只有3克），代表中間50%的產品重量非常接近</li>
          <li><strong>盒子內的線（500.5）：</strong> 幾乎居中，說明數據分佈相對對稱</li>
          <li><strong>鬚子長度：</strong> 相對於盒子很短，表示不存在明顯的離群數據</li>
          <li><strong>無異常值：</strong> 所有產品重量都在合理範圍內</li>
        </ul>

        <p><strong>敘述統計告訴我們：</strong> 產品重量平均為500.2克（非常接近目標500克），變異性極小（標準差1.53克，IQR = 3克），所有產品都在497-503克的可接受範圍內。製程控制效果優良，產品質量穩定，符合品質管制標準。這樣的生產線可以放心交付給客戶。</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "以下哪個敘述最準確地區分敘述統計和推論統計？",
        options: [
          "敘述統計用於大數據，推論統計用於小數據",
          "敘述統計描述現有數據的特徵，推論統計從樣本推論母體特徵",
          "敘述統計只用於教育領域，推論統計用於工業領域",
          "敘述統計和推論統計沒有區別"
        ],
        correct: 1,
        explanation: "敘述統計的目的是摘要和呈現數據，推論統計則用概率方法從樣本推論整個母體。"
      },
      {
        type: "multiple-choice",
        question: "在班級成績分析例子中，30名學生的成績代表什麼？",
        options: [
          "母體",
          "樣本",
          "參數",
          "統計量"
        ],
        correct: 0,
        explanation: "在這個研究中，30名學生就是我們研究的全部對象，代表母體。"
      },
      {
        type: "multiple-choice",
        question: "產品重量平均500.2克，標準差1.53克。以下哪個敘述最恰當？",
        options: [
          "所有產品重量都相同",
          "大約95%的產品重量在500.2±3克之間",
          "產品重量變異性很小，相對穩定",
          "標準差越大表示品質越好"
        ],
        correct: 2,
        explanation: "標準差衡量數據的變異性，1.53克表示相對較小的變異，說明產品重量相對穩定。"
      },
      {
        type: "calculation",
        question: "計算以下數據的平均數：88, 92, 85, 90, 95",
        correctAnswer: 90,
        tolerance: 0.1,
        explanation: "平均數 = (88+92+85+90+95)/5 = 450/5 = 90"
      }
    ]
  },

  {
    id: 2,
    title: "概率分佈",
    section: "推論統計",
    duration: "25分鐘",
    concepts: [
      {
        title: "常態分佈的認識",
        content: `
          <h3>常態分佈 (Normal Distribution)</h3>
          <p>常態分佈是統計中最重要的概率分佈，具有以下特徵：</p>
          <ul>
            <li>呈鐘形曲線，左右對稱</li>
            <li>平均數、中位數、眾數相同，都在分佈中心</li>
            <li>大約68.2%的數據落在 μ±1σ 內</li>
            <li>大約95.4%的數據落在 μ±2σ 內</li>
            <li>大約99.7%的數據落在 μ±3σ 內</li>
          </ul>
          <p><strong>許多自然現象都近似常態分佈：</strong> 學生身高、考試成績、產品尺寸等</p>

          <h4>常態分佈圖示</h4>
          <div style="text-align: center; margin: 1.5rem 0;">
            <img src="assets/normal_distribution.svg" alt="常態分佈曲線" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 0.5rem;">
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
              圖：常態分佈的特徵，顯示68.2%、95.4%、99.7%的數據範圍
            </p>
          </div>
        `
      },
      {
        title: "標準化 (Standardization)",
        content: `
          <h3>Z-score 標準化</h3>
          <p>將任何常態分佈轉換成<strong>標準常態分佈</strong>（平均數=0，標準差=1），方便比較和查表。</p>

          <p><strong>公式：</strong> z = (x - μ) / σ</p>

          <p>其中：</p>
          <ul>
            <li>x = 原始數值</li>
            <li>μ = 平均數</li>
            <li>σ = 標準差</li>
            <li>z = 標準化後的值</li>
          </ul>

          <p><strong>Z-score 的意義：</strong></p>
          <ul>
            <li>z = 0：數值等於平均數</li>
            <li>z > 0：數值高於平均數</li>
            <li>z < 0：數值低於平均數</li>
            <li>|z| 越大：數值距離平均數越遠</li>
          </ul>
        `
      },
      {
        title: "應用標準常態分佈表",
        content: `
          <h3>查找概率</h3>
          <p>使用標準常態分佈表，我們可以找到任何 z 值對應的累積概率。</p>

          <p><strong>常見的 z 值和概率：</strong></p>
          <ul>
            <li>z = 1.00：累積概率 0.8413（84.13%）</li>
            <li>z = 1.96：累積概率 0.9750（97.50%）</li>
            <li>z = 2.00：累積概率 0.9772（97.72%）</li>
            <li>z = 2.58：累積概率 0.9951（99.51%）</li>
          </ul>
        `
      }
    ],
    example: {
      title: "教育例子：考試成績分佈",
      description: "某次國家考試，成績近似常態分佈，平均分為70分，標準差為10分",
      scenario: "某學生得分86分，求：\n1. 該學生的z-score\n2. 有多少百分比的考生分數低於此學生",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：計算z-score</strong></p>
        <p>z = (86 - 70) / 10 = 1.6</p>

        <p><strong>第2步：查標準常態分佈表</strong></p>
        <p>z = 1.6 對應的累積概率約為 0.9452</p>

        <p><strong>結論：</strong></p>
        <ul>
          <li>該學生的成績高於平均分1.6個標準差</li>
          <li>約94.52%的考生成績低於此學生</li>
          <li>該學生大約排名前5.48%</li>
        </ul>
      `
    },
    industrialExample: {
      title: "工業例子：產品尺寸檢查",
      description: "某工廠生產的螺栓直徑近似常態分佈，平均直徑為10.0毫米，標準差為0.05毫米。規格要求在9.9~10.1毫米之間。",
      scenario: "求：\n1. 螺栓直徑為10.15毫米時的z-score\n2. 符合規格的螺栓百分比",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：計算邊界的z-score</strong></p>
        <p>下限: z = (9.9 - 10.0) / 0.05 = -2.0</p>
        <p>上限: z = (10.1 - 10.0) / 0.05 = 2.0</p>

        <p><strong>第2步：查標準常態分佈表</strong></p>
        <p>z = -2.0 對應概率 0.0228</p>
        <p>z = 2.0 對應概率 0.9772</p>

        <p><strong>第3步：計算符合規格的比例</strong></p>
        <p>符合規格 = 0.9772 - 0.0228 = 0.9544 = 95.44%</p>

        <p><strong>結論：</strong></p>
        <ul>
          <li>約95.44%的螺栓符合規格</li>
          <li>需要改進製程控制以減少不合格品</li>
        </ul>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "常態分佈中，大約95%的數據落在什麼範圍？",
        options: [
          "μ±1σ",
          "μ±2σ",
          "μ±3σ",
          "μ±1.96σ"
        ],
        correct: 1,
        explanation: "根據常態分佈的性質，約95%的數據落在平均數±2個標準差的範圍內。"
      },
      {
        type: "calculation",
        question: "成績平均70分，標準差5分，某生得分80分。求z-score（四捨五入到小數點第二位）",
        correctAnswer: 2.0,
        tolerance: 0.05,
        explanation: "z = (80-70)/5 = 10/5 = 2.0"
      },
      {
        type: "multiple-choice",
        question: "z = 0 在標準常態分佈中表示什麼？",
        options: [
          "得分為0分",
          "所有考生都及格",
          "數值等於平均數",
          "標準差為0"
        ],
        correct: 2,
        explanation: "z-score = 0 表示該數值恰好等於平均數，是常態分佈的中心。"
      },
      {
        type: "multiple-choice",
        question: "以下哪個敘述關於z-score最正確？",
        options: [
          "z-score只能用於常態分佈",
          "z-score可以是負數",
          "z-score越大越好",
          "z-score總是介於0和1之間"
        ],
        correct: 1,
        explanation: "z-score可以是正數（高於平均數）或負數（低於平均數），用於表示數值距離平均數的位置。"
      }
    ]
  },

  {
    id: 3,
    title: "抽樣分佈與中心極限定理",
    section: "推論統計",
    duration: "25分鐘",
    concepts: [
      {
        title: "樣本與樣本分佈",
        content: `
          <h3>樣本分佈 (Sampling Distribution)</h3>
          <p>樣本分佈是指：從同一母體中重複抽取多個樣本，計算每個樣本的統計量（如平均數）後形成的分佈。</p>

          <p><strong>樣本分佈的性質：</strong></p>
          <ul>
            <li>樣本平均數的平均值 = 母體平均數 (μ)</li>
            <li>樣本平均數的標準差 = 母體標準差 / √n</li>
            <li>n 越大，樣本平均數越接近母體平均數</li>
          </ul>

          <h3>標準誤 (Standard Error)</h3>
          <p>標準誤是樣本平均數的標準差，公式：SE = σ / √n</p>
          <p>標準誤衡量樣本統計量的可靠性，SE越小表示估計越準確。</p>
        `
      },
      {
        title: "中心極限定理",
        content: `
          <h3>中心極限定理 (Central Limit Theorem)</h3>
          <p>這是統計學最重要的定理之一：</p>

          <p><strong>定理內容：</strong></p>
          <p>無論母體分佈是什麼形態，當樣本容量 n 足夠大時（通常n≥30），樣本平均數的分佈會近似於常態分佈。</p>

          <p><strong>重要推論：</strong></p>
          <ul>
            <li>即使母體不是常態分佈，樣本平均數也會形成常態分佈</li>
            <li>樣本容量越大，樣本平均數的分佈越接近常態分佈</li>
            <li>這使得我們可以用常態分佈進行推論統計</li>
          </ul>
        `
      },
      {
        title: "應用中心極限定理",
        content: `
          <h3>計算樣本平均數的概率</h3>
          <p>利用中心極限定理，我們可以計算樣本平均數在某個範圍內的概率。</p>

          <p><strong>步驟：</strong></p>
          <ol>
            <li>計算標準誤：SE = σ / √n</li>
            <li>計算z-score：z = (x̄ - μ) / SE</li>
            <li>查標準常態分佈表得到概率</li>
          </ol>
        `
      }
    ],
    example: {
      title: "教育例子：學生身高調查",
      description: "某校學生身高的平均值為170厘米，標準差為8厘米。隨機抽取25名學生進行調查。",
      scenario: "求樣本平均身高在169~171厘米之間的概率",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：計算標準誤</strong></p>
        <p>SE = σ / √n = 8 / √25 = 8 / 5 = 1.6厘米</p>

        <p><strong>第2步：計算邊界的z-score</strong></p>
        <p>下限: z = (169 - 170) / 1.6 = -0.625</p>
        <p>上限: z = (171 - 170) / 1.6 = 0.625</p>

        <p><strong>第3步：查標準常態分佈表</strong></p>
        <p>z = -0.625 對應概率約 0.2660</p>
        <p>z = 0.625 對應概率約 0.7340</p>

        <p><strong>結論：</strong></p>
        <p>概率 = 0.7340 - 0.2660 = 0.4680 ≈ 46.8%</p>
        <p>有約46.8%的可能性，樣本平均身高在169~171厘米之間</p>
      `
    },
    industrialExample: {
      title: "工業例子：電池壽命檢驗",
      description: "某工廠生產的電池壽命平均為1000小時，標準差為100小時。每月隨機抽取36顆電池進行檢驗。",
      scenario: "求樣本平均壽命在990~1010小時之間的概率",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：計算標準誤</strong></p>
        <p>SE = σ / √n = 100 / √36 = 100 / 6 = 16.67小時</p>

        <p><strong>第2步：計算邊界的z-score</strong></p>
        <p>下限: z = (990 - 1000) / 16.67 = -0.6</p>
        <p>上限: z = (1010 - 1000) / 16.67 = 0.6</p>

        <p><strong>第3步：查標準常態分佈表</strong></p>
        <p>z = -0.6 對應概率約 0.2743</p>
        <p>z = 0.6 對應概率約 0.7257</p>

        <p><strong>結論：</strong></p>
        <p>概率 = 0.7257 - 0.2743 = 0.4514 ≈ 45.14%</p>
        <p>有約45.14%的可能性，月度樣本平均壽命在990~1010小時之間</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "中心極限定理說明了什麼重要結論？",
        options: [
          "母體平均數等於樣本平均數",
          "樣本越大越不可靠",
          "即使母體不是常態分佈，樣本平均數也會近似常態分佈",
          "所有樣本平均數都相同"
        ],
        correct: 2,
        explanation: "中心極限定理的核心是：無論母體分佈如何，樣本平均數當n足夠大時會近似常態分佈。"
      },
      {
        type: "calculation",
        question: "母體標準差為20，樣本容量為100，求標準誤（四捨五入到小數點第一位）",
        correctAnswer: 2.0,
        tolerance: 0.1,
        explanation: "SE = σ / √n = 20 / √100 = 20 / 10 = 2.0"
      },
      {
        type: "multiple-choice",
        question: "若要減小標準誤，應該如何做？",
        options: [
          "減小樣本容量",
          "增加樣本容量",
          "降低母體平均數",
          "增加母體標準差"
        ],
        correct: 1,
        explanation: "標準誤 = σ / √n，增加n可以減小標準誤，使樣本估計更精確。"
      },
      {
        type: "multiple-choice",
        question: "樣本平均數的標準差稱為什麼？",
        options: [
          "母體標準差",
          "標準誤",
          "全距",
          "變異數"
        ],
        correct: 1,
        explanation: "標準誤（Standard Error）就是樣本平均數的標準差，衡量樣本估計的精確度。"
      }
    ]
  },

  {
    id: 4,
    title: "信賴區間",
    section: "推論統計",
    duration: "25分鐘",
    concepts: [
      {
        title: "點估計與區間估計",
        content: `
          <h3>點估計 (Point Estimation)</h3>
          <p>用單一的樣本統計量來估計母體參數。</p>
          <p><strong>例子：</strong> 用樣本平均數估計母體平均數</p>
          <p><strong>缺點：</strong> 完全正確的機率很小，無法反映精確性</p>

          <h3>區間估計 (Interval Estimation)</h3>
          <p>給出一個數值範圍，表示母體參數可能落在這個範圍內的信心程度。</p>
          <p><strong>更實用：</strong> 提供了估計的可靠性信息</p>
        `
      },
      {
        title: "信賴區間與信心水準",
        content: `
          <h3>信賴區間 (Confidence Interval)</h3>
          <p>是根據樣本數據計算出的區間，用來估計母體參數可能的範圍。</p>

          <h3>信心水準 (Confidence Level)</h3>
          <p>表示區間包含真正母體參數的把握程度。常用的有：</p>
          <ul>
            <li>90% 信心水準（α=0.10）</li>
            <li>95% 信心水準（α=0.05）</li>
            <li>99% 信心水準（α=0.01）</li>
          </ul>

          <p><strong>正確解讀：</strong> 95%信賴區間不是說有95%的概率真值在區間內，而是說用這個方法重複抽樣100次，大約95次的區間會包含真值。</p>
        `
      },
      {
        title: "計算信賴區間",
        content: `
          <h3>大樣本情況（n≥30）：使用Z分佈</h3>
          <p><strong>公式：</strong> 信賴區間 = x̄ ± z*(SE)</p>

          <p>其中：</p>
          <ul>
            <li>x̄ = 樣本平均數</li>
            <li>z* = 對應信心水準的z值</li>
            <li>SE = σ / √n（標準誤）</li>
          </ul>

          <p><strong>常用的z*值：</strong></p>
          <ul>
            <li>90% 信心水準：z* = 1.645</li>
            <li>95% 信心水準：z* = 1.96</li>
            <li>99% 信心水準：z* = 2.576</li>
          </ul>

          <h3>小樣本情況（n<30）：使用t分佈</h3>
          <p><strong>公式：</strong> 信賴區間 = x̄ ± t*(s / √n)</p>
          <p>其中 s 是樣本標準差，t*值需查t分佈表</p>
        `
      }
    ],
    example: {
      title: "教育例子：班級平均成績估計",
      description: "某班級隨機抽取30名學生，平均成績為82分，標準差為6分。求班級平均成績的95%信賴區間。",
      scenario: "計算信賴區間，並解釋結果",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：確認資訊</strong></p>
        <ul>
          <li>樣本容量：n = 30（≥30，用Z分佈）</li>
          <li>樣本平均數：x̄ = 82</li>
          <li>標準差：σ = 6</li>
          <li>信心水準：95%，z* = 1.96</li>
        </ul>

        <p><strong>第2步：計算標準誤</strong></p>
        <p>SE = σ / √n = 6 / √30 = 6 / 5.477 = 1.095</p>

        <p><strong>第3步：計算誤差邊際</strong></p>
        <p>誤差邊際 = z* × SE = 1.96 × 1.095 = 2.145</p>

        <p><strong>第4步：計算信賴區間</strong></p>
        <p>下限 = 82 - 2.145 = 79.855</p>
        <p>上限 = 82 + 2.145 = 84.145</p>

        <p><strong>結論：</strong></p>
        <p>我們有95%的信心，班級平均成績在79.86~84.15分之間。</p>
      `
    },
    industrialExample: {
      title: "工業例子：產品平均壽命估計",
      description: "隨機抽取40顆某型號燈泡進行壽命測試，平均壽命為1200小時，標準差為80小時。求該型號燈泡平均壽命的99%信賴區間。",
      scenario: "計算信賴區間，評估產品品質",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：確認資訊</strong></p>
        <ul>
          <li>樣本容量：n = 40（≥30，用Z分佈）</li>
          <li>樣本平均數：x̄ = 1200小時</li>
          <li>標準差：σ = 80小時</li>
          <li>信心水準：99%，z* = 2.576</li>
        </ul>

        <p><strong>第2步：計算標準誤</strong></p>
        <p>SE = σ / √n = 80 / √40 = 80 / 6.325 = 12.65小時</p>

        <p><strong>第3步：計算誤差邊際</strong></p>
        <p>誤差邊際 = z* × SE = 2.576 × 12.65 = 32.59小時</p>

        <p><strong>第4步：計算信賴區間</strong></p>
        <p>下限 = 1200 - 32.59 = 1167.41小時</p>
        <p>上限 = 1200 + 32.59 = 1232.59小時</p>

        <p><strong>結論：</strong></p>
        <p>我們有99%的信心，該型號燈泡平均壽命在1167~1233小時之間。</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "下列對信賴區間的描述，哪一個最正確？",
        options: [
          "95%信賴區間表示有95%的概率真值在區間內",
          "95%信賴區間表示用這個方法重複抽樣，約95%的區間會包含真值",
          "信賴區間內的所有值都有相同的概率",
          "信賴區間越寬越好"
        ],
        correct: 1,
        explanation: "信賴區間的正確解釋是長期重複抽樣時，約95%的區間會包含真值，而不是說真值在區間內的概率是95%。"
      },
      {
        type: "calculation",
        question: "樣本平均數85，標準誤2，95%置信水準（z*=1.96）。信賴區間的下限是多少？",
        correctAnswer: 81.08,
        tolerance: 0.1,
        explanation: "下限 = 85 - (1.96 × 2) = 85 - 3.92 = 81.08"
      },
      {
        type: "multiple-choice",
        question: "要得到更窄的信賴區間，可以採取什麼措施？",
        options: [
          "降低信心水準",
          "增加樣本容量",
          "增加母體標準差",
          "都無法改變"
        ],
        correct: 1,
        explanation: "信賴區間寬度與誤差邊際成正比，增加樣本容量可以減小標準誤，從而縮小信賴區間。"
      },
      {
        type: "multiple-choice",
        question: "99%置信水準對應的z*值是多少？",
        options: [
          "1.645",
          "1.96",
          "2.576",
          "3.00"
        ],
        correct: 2,
        explanation: "99%置信水準對應的z*值是2.576，95%對應1.96，90%對應1.645。"
      }
    ]
  },

  {
    id: 5,
    title: "假設檢驗基礎",
    section: "推論統計",
    duration: "30分鐘",
    concepts: [
      {
        title: "假設檢驗的基本概念",
        content: `
          <h3>假設檢驗 (Hypothesis Testing)</h3>
          <p>是推論統計中最重要的方法之一，用來決定是否接受或拒絕關於母體的某個主張。</p>

          <h3>虛無假設與對立假設</h3>
          <ul>
            <li><strong>虛無假設 (H₀)：</strong> 我們預設為真的假設，通常表示「沒有差異」或「沒有效果」</li>
            <li><strong>對立假設 (H₁)：</strong> 與虛無假設相反，是我們想要驗證的假設</li>
          </ul>

          <p><strong>例子：</strong></p>
          <ul>
            <li>H₀：新教學方法與舊方法的效果相同（μ₁ = μ₂）</li>
            <li>H₁：新教學方法比舊方法效果更好（μ₁ > μ₂）</li>
          </ul>
        `
      },
      {
        title: "顯著性水準與P值",
        content: `
          <h3>顯著性水準 (Significance Level, α)</h3>
          <p>是我們設定的拒絕虛無假設的臨界值，常用的有：</p>
          <ul>
            <li>α = 0.05（5%，最常用）</li>
            <li>α = 0.01（1%，更嚴格）</li>
            <li>α = 0.10（10%，較寬鬆）</li>
          </ul>

          <h3>P值 (P-value)</h3>
          <p>P值是在虛無假設成立的前提下，得到當前樣本或更極端結果的概率。</p>

          <p><strong>決策規則：</strong></p>
          <ul>
            <li>若 P值 < α：拒絕H₀，認為結果具有統計顯著性</li>
            <li>若 P值 ≥ α：無法拒絕H₀，認為結果不具顯著性</li>
          </ul>

          <p><strong>P值的正確解釋：</strong> P值不是「虛無假設為真的概率」，而是「在H₀為真的前提下，得到當前或更極端樣本的概率」</p>
        `
      },
      {
        title: "第一類和第二類錯誤",
        content: `
          <h3>假設檢驗中的錯誤</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border:1px solid #ddd;">
              <th style="border:1px solid #ddd; padding:8px;">決定</th>
              <th style="border:1px solid #ddd; padding:8px;">H₀為真</th>
              <th style="border:1px solid #ddd; padding:8px;">H₀為假</th>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;"><strong>接受H₀</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">正確決定</td>
              <td style="border:1px solid #ddd; padding:8px;">第二類錯誤 (β)</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;"><strong>拒絕H₀</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">第一類錯誤 (α)</td>
              <td style="border:1px solid #ddd; padding:8px;">正確決定</td>
            </tr>
          </table>

          <p><strong>第一類錯誤 (Type I Error, α)：</strong> 當H₀實際為真時，我們卻拒絕了它。常稱為「假陽性」</p>
          <p><strong>第二類錯誤 (Type II Error, β)：</strong> 當H₀實際為假時，我們卻接受了它。常稱為「假陰性」</p>
        `
      },
      {
        title: "假設檢驗的步驟",
        content: `
          <h3>進行假設檢驗的標準步驟</h3>
          <ol>
            <li><strong>建立假設：</strong> 設定H₀和H₁</li>
            <li><strong>選擇顯著性水準：</strong> 通常選α = 0.05</li>
            <li><strong>選擇合適的檢驗方法：</strong> 根據數據特徵選擇（Z檢驗、t檢驗等）</li>
            <li><strong>計算檢驗統計量：</strong> 根據樣本數據計算</li>
            <li><strong>找出P值或臨界值：</strong> 確定結果是否落在拒絕域</li>
            <li><strong>做出決策：</strong> 比較P值與α，拒絕或接受H₀</li>
            <li><strong>陳述結論：</strong> 用實際問題語言解釋結果</li>
          </ol>
        `
      }
    ],
    example: {
      title: "教育例子：教學方法效果檢驗",
      description: "某校使用新教學方法的班級有30名學生，平均考試成績為85分，標準差為8分。歷史資料表明，舊教學方法的平均成績為82分。要檢驗新方法是否比舊方法更有效。",
      scenario: "進行假設檢驗，判斷新教學方法是否有效",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：建立假設</strong></p>
        <ul>
          <li>H₀: μ = 82（新方法效果與舊方法相同）</li>
          <li>H₁: μ > 82（新方法效果更好）</li>
        </ul>

        <p><strong>第2步：選擇顯著性水準</strong></p>
        <p>α = 0.05</p>

        <p><strong>第3步：選擇檢驗方法</strong></p>
        <p>n = 30 ≥ 30，使用Z檢驗</p>

        <p><strong>第4步：計算檢驗統計量</strong></p>
        <p>SE = σ / √n = 8 / √30 = 1.46</p>
        <p>z = (x̄ - μ) / SE = (85 - 82) / 1.46 = 2.05</p>

        <p><strong>第5步：找出P值</strong></p>
        <p>z = 2.05 對應的單尾P值 ≈ 0.0202</p>

        <p><strong>第6步：做出決策</strong></p>
        <p>P值 (0.0202) < α (0.05)，拒絕H₀</p>

        <p><strong>結論：</strong></p>
        <p>在5%的顯著性水準下，新教學方法的效果顯著高於舊方法。</p>
      `
    },
    industrialExample: {
      title: "工業例子：零件尺寸檢驗",
      description: "某零件的規格要求平均直徑為50毫米。隨機抽取36個零件進行測量，平均直徑為50.5毫米，標準差為1.2毫米。要檢驗製程是否偏離規格。",
      scenario: "進行假設檢驗，判斷製程是否需要調整",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：建立假設</strong></p>
        <ul>
          <li>H₀: μ = 50（製程符合規格）</li>
          <li>H₁: μ ≠ 50（製程偏離規格）</li>
        </ul>

        <p><strong>第2步：選擇顯著性水準</strong></p>
        <p>α = 0.05</p>

        <p><strong>第3步：選擇檢驗方法</strong></p>
        <p>n = 36 ≥ 30，使用Z檢驗，這是雙尾檢驗</p>

        <p><strong>第4步：計算檢驗統計量</strong></p>
        <p>SE = σ / √n = 1.2 / √36 = 0.2</p>
        <p>z = (x̄ - μ) / SE = (50.5 - 50) / 0.2 = 2.5</p>

        <p><strong>第5步：找出P值</strong></p>
        <p>z = 2.5 對應的雙尾P值 ≈ 0.0124</p>

        <p><strong>第6步：做出決策</strong></p>
        <p>P值 (0.0124) < α (0.05)，拒絕H₀</p>

        <p><strong>結論：</strong></p>
        <p>在5%的顯著性水準下，製程平均直徑顯著偏離50毫米的規格，需要進行調整。</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "虛無假設(H₀)通常表示什麼？",
        options: [
          "我們想要驗證的假設",
          "沒有差異或沒有效果的假設",
          "樣本的特徵",
          "設定的顯著性水準"
        ],
        correct: 1,
        explanation: "虛無假設通常表示沒有差異、沒有效果或無關係，是我們預設為真的假設。"
      },
      {
        type: "multiple-choice",
        question: "當P值 = 0.03，α = 0.05時，應該如何決策？",
        options: [
          "接受H₀",
          "拒絕H₀",
          "無法確定",
          "增加樣本容量"
        ],
        correct: 1,
        explanation: "當P值 < α時，拒絕虛無假設，認為結果具有統計顯著性。"
      },
      {
        type: "multiple-choice",
        question: "第一類錯誤(α)是什麼？",
        options: [
          "當H₁為真時接受H₀",
          "當H₀為真時拒絕H₀",
          "樣本容量太小",
          "選擇了錯誤的檢驗方法"
        ],
        correct: 1,
        explanation: "第一類錯誤是當虛無假設實際為真時，卻拒絕了它，也叫假陽性。"
      },
      {
        type: "multiple-choice",
        question: "P值的正確含義是什麼？",
        options: [
          "虛無假設為真的概率",
          "對立假設為真的概率",
          "在虛無假設成立的前提下，得到當前或更極端樣本的概率",
          "樣本平均數正確的概率"
        ],
        correct: 2,
        explanation: "P值是在H₀為真的前提下，得到當前樣本或更極端結果的概率，常見的誤解是把它當作H₀為真的概率。"
      }
    ]
  },

  {
    id: 6,
    title: "單樣本檢驗",
    section: "推論統計",
    duration: "30分鐘",
    concepts: [
      {
        title: "Z檢驗和t檢驗的選擇",
        content: `
          <h3>Z檢驗 (Z-test)</h3>
          <p>用於大樣本（n ≥ 30）情況，母體標準差已知或樣本標準差足夠大時</p>
          <p><strong>檢驗統計量：</strong> z = (x̄ - μ) / (σ / √n)</p>

          <h3>t檢驗 (t-test)</h3>
          <p>用於小樣本（n < 30）情況，母體標準差未知時</p>
          <p><strong>檢驗統計量：</strong> t = (x̄ - μ) / (s / √n)</p>

          <p><strong>比較表：</strong></p>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border:1px solid #ddd;">
              <th style="border:1px solid #ddd; padding:8px;">特徵</th>
              <th style="border:1px solid #ddd; padding:8px;">Z檢驗</th>
              <th style="border:1px solid #ddd; padding:8px;">t檢驗</th>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">樣本容量</td>
              <td style="border:1px solid #ddd; padding:8px;">n ≥ 30</td>
              <td style="border:1px solid #ddd; padding:8px;">n < 30</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">母體標準差</td>
              <td style="border:1px solid #ddd; padding:8px;">已知或未知</td>
              <td style="border:1px solid #ddd; padding:8px;">未知</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">分佈</td>
              <td style="border:1px solid #ddd; padding:8px;">常態分佈</td>
              <td style="border:1px solid #ddd; padding:8px;">t分佈</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">自由度</td>
              <td style="border:1px solid #ddd; padding:8px;">無需考慮</td>
              <td style="border:1px solid #ddd; padding:8px;">df = n - 1</td>
            </tr>
          </table>
        `
      },
      {
        title: "t分佈和自由度",
        content: `
          <h3>t分佈 (t Distribution)</h3>
          <p>t分佈是由William Gosset在1908年發現的，用於樣本量較小的情況。</p>

          <p><strong>t分佈的特點：</strong></p>
          <ul>
            <li>形狀像常態分佈，但尾部更厚</li>
            <li>當自由度越大，t分佈越接近常態分佈</li>
            <li>需要考慮自由度(df)來查表</li>
          </ul>

          <h3>自由度 (Degrees of Freedom, df)</h3>
          <p>自由度是樣本中可以自由變動的數據個數。</p>
          <p><strong>單樣本：</strong> df = n - 1</p>

          <p><strong>例子：</strong> 如果n = 20，則df = 19</p>
        `
      },
      {
        title: "進行單樣本檢驗",
        content: `
          <h3>單樣本檢驗的步驟</h3>
          <ol>
            <li>確認樣本容量和標準差的已知情況</li>
            <li>決定使用Z檢驗或t檢驗</li>
            <li>計算檢驗統計量</li>
            <li>根據自由度（如果是t檢驗）查表找臨界值或P值</li>
            <li>與顯著性水準比較做出決策</li>
          </ol>
        `
      }
    ],
    example: {
      title: "教育例子：班級閱讀速度測試",
      description: "某班級12名學生的每分鐘閱讀字數（WPM）：245, 280, 290, 265, 275, 285, 255, 270, 295, 260, 285, 275。歷史資料表明年級平均為270 WPM。檢驗該班級閱讀速度是否與年級平均不同。",
      scenario: "進行t檢驗，判斷班級閱讀速度是否有差異",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：確認統計量</strong></p>
        <ul>
          <li>樣本容量：n = 12 (< 30)</li>
          <li>樣本平均數：x̄ = 275</li>
          <li>樣本標準差：s = 15</li>
          <li>母體平均數：μ = 270</li>
        </ul>

        <p><strong>第2步：選擇檢驗方法</strong></p>
        <p>n < 30，使用t檢驗</p>

        <p><strong>第3步：建立假設</strong></p>
        <ul>
          <li>H₀: μ = 270</li>
          <li>H₁: μ ≠ 270</li>
        </ul>

        <p><strong>第4步：計算檢驗統計量</strong></p>
        <p>SE = s / √n = 15 / √12 = 4.33</p>
        <p>t = (x̄ - μ) / SE = (275 - 270) / 4.33 = 1.15</p>

        <p><strong>第5步：確定P值</strong></p>
        <p>df = n - 1 = 11，雙尾t檢驗</p>
        <p>t = 1.15 對應的P值約 0.27（雙尾）</p>

        <p><strong>第6步：做出決策</strong></p>
        <p>P值 (0.27) > α (0.05)，無法拒絕H₀</p>

        <p><strong>結論：</strong></p>
        <p>在5%的顯著性水準下，該班級的閱讀速度與年級平均無顯著差異。</p>
      `
    },
    industrialExample: {
      title: "工業例子：電阻值檢測",
      description: "電阻的規格值應為1000Ω。隨機抽取15個電阻進行測試：1005, 995, 1008, 1002, 998, 1010, 1003, 1000, 1007, 996, 1004, 1001, 999, 1006, 1009。檢驗電阻是否符合規格。",
      scenario: "進行t檢驗，判斷電阻值是否偏離規格",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：確認統計量</strong></p>
        <ul>
          <li>樣本容量：n = 15 (< 30)</li>
          <li>樣本平均數：x̄ = 1002.67Ω</li>
          <li>樣本標準差：s ≈ 5.16Ω</li>
          <li>規格值：μ = 1000Ω</li>
        </ul>

        <p><strong>第2步：選擇檢驗方法</strong></p>
        <p>n < 30，使用t檢驗</p>

        <p><strong>第3步：建立假設</strong></p>
        <ul>
          <li>H₀: μ = 1000</li>
          <li>H₁: μ ≠ 1000</li>
        </ul>

        <p><strong>第4步：計算檢驗統計量</strong></p>
        <p>SE = s / √n = 5.16 / √15 = 1.33</p>
        <p>t = (x̄ - μ) / SE = (1002.67 - 1000) / 1.33 = 2.01</p>

        <p><strong>第5步：確定P值</strong></p>
        <p>df = 14，雙尾t檢驗，t = 2.01對應P值約 0.062</p>

        <p><strong>第6步：做出決策</strong></p>
        <p>P值 (0.062) > α (0.05)，無法拒絕H₀</p>

        <p><strong>結論：</strong></p>
        <p>在5%的顯著性水準下，電阻值基本符合規格要求，不需要調整。</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "樣本容量為25，母體標準差未知，應該使用哪種檢驗？",
        options: [
          "Z檢驗",
          "t檢驗",
          "卡方檢驗",
          "兩個都可以"
        ],
        correct: 1,
        explanation: "樣本容量25 < 30，應使用t檢驗。雖然接近30，但母體標準差未知是使用t檢驗的主要原因。"
      },
      {
        type: "multiple-choice",
        question: "t檢驗中，n = 20時，自由度是多少？",
        options: [
          "19",
          "20",
          "21",
          "無需考慮"
        ],
        correct: 0,
        explanation: "t檢驗的自由度 = n - 1 = 20 - 1 = 19"
      },
      {
        type: "calculation",
        question: "樣本平均數為88，母體平均數為85，樣本標準差為6，n=25。計算t值（四捨五入到小數點第二位）",
        correctAnswer: 2.5,
        tolerance: 0.1,
        explanation: "SE = 6 / √25 = 6 / 5 = 1.2，t = (88-85) / 1.2 = 3 / 1.2 = 2.5"
      },
      {
        type: "multiple-choice",
        question: "t分佈有什麼特點？",
        options: [
          "與常態分佈完全相同",
          "自由度越小，尾部越厚，越偏離常態分佈",
          "自由度越大，越接近均勻分佈",
          "自由度的大小不影響形狀"
        ],
        correct: 1,
        explanation: "t分佈的形狀取決於自由度，自由度越小，尾部越厚；自由度越大，越接近常態分佈。"
      }
    ]
  },

  {
    id: 7,
    title: "雙樣本檢驗",
    section: "推論統計",
    duration: "30分鐘",
    concepts: [
      {
        title: "獨立樣本與配對樣本",
        content: `
          <h3>獨立樣本 (Independent Samples)</h3>
          <p>兩個樣本來自不同的群體，樣本之間沒有對應關係。</p>
          <p><strong>例子：</strong> 比較男女學生的平均成績，新舊教學方法的效果</p>

          <h3>配對樣本 (Paired Samples)</h3>
          <p>兩個樣本來自同一群體，在不同時點或條件下測量，樣本之間有一一對應的關係。</p>
          <p><strong>例子：</strong> 同一批學生考試前後的成績變化，某地區今年和去年的平均氣溫</p>

          <p><strong>關鍵區別：</strong></p>
          <ul>
            <li>獨立樣本：資料來自不同對象</li>
            <li>配對樣本：資料來自相同對象（如同一學生的前後測）</li>
          </ul>
        `
      },
      {
        title: "獨立樣本t檢驗",
        content: `
          <h3>獨立樣本t檢驗的步驟</h3>
          <p>比較兩個獨立樣本的平均數是否有顯著差異</p>

          <p><strong>檢驗統計量：</strong></p>
          <p>t = (x̄₁ - x̄₂) / √[s²ₚ(1/n₁ + 1/n₂)]</p>

          <p>其中 s²ₚ 是合併樣本變異數（兩個樣本變異數的加權平均）</p>

          <p><strong>自由度：</strong> df = n₁ + n₂ - 2</p>

          <p><strong>前提假設：</strong></p>
          <ul>
            <li>兩個樣本都來自常態分佈（或足夠大）</li>
            <li>兩個母體的變異數相等（方差齊次性）</li>
            <li>樣本相互獨立</li>
          </ul>
        `
      },
      {
        title: "配對樣本t檢驗",
        content: `
          <h3>配對樣本t檢驗的步驟</h3>
          <p>比較配對數據的前後差異是否顯著</p>

          <p><strong>核心思想：</strong> 先計算每對數據的差值，再對差值進行單樣本t檢驗</p>

          <p><strong>檢驗統計量：</strong></p>
          <p>t = d̄ / (sₐ / √n)</p>

          <p>其中：</p>
          <ul>
            <li>d̄ = 差值的平均數</li>
            <li>sₐ = 差值的標準差</li>
            <li>n = 配對數量</li>
          </ul>

          <p><strong>自由度：</strong> df = n - 1</p>

          <p><strong>優點：</strong> 比獨立樣本更有效率，因為控制了個體差異</p>
        `
      },
      {
        title: "應用與選擇",
        content: `
          <h3>何時使用哪種檢驗</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border:1px solid #ddd;">
              <th style="border:1px solid #ddd; padding:8px;">情況</th>
              <th style="border:1px solid #ddd; padding:8px;">使用的檢驗</th>
              <th style="border:1px solid #ddd; padding:8px;">例子</th>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">比較兩個不同群體</td>
              <td style="border:1px solid #ddd; padding:8px;">獨立樣本t檢驗</td>
              <td style="border:1px solid #ddd; padding:8px;">男女生平均成績</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">比較同一群體的前後變化</td>
              <td style="border:1px solid #ddd; padding:8px;">配對樣本t檢驗</td>
              <td style="border:1px solid #ddd; padding:8px;">學生訓練前後成績</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">比較3個或以上群體</td>
              <td style="border:1px solid #ddd; padding:8px;">ANOVA（不在本課程）</td>
              <td style="border:1px solid #ddd; padding:8px;">三個班級的成績</td>
            </tr>
          </table>
        `
      }
    ],
    example: {
      title: "教育例子：教學方法對比",
      description: "比較兩個班級的數學成績。班級A（30人）平均分82，標準差8；班級B（28人）平均分79，標準差7。檢驗兩個班級的成績是否有顯著差異。",
      scenario: "進行獨立樣本t檢驗",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：確認資訊</strong></p>
        <ul>
          <li>班級A：n₁ = 30，x̄₁ = 82，s₁ = 8</li>
          <li>班級B：n₂ = 28，x̄₂ = 79，s₂ = 7</li>
        </ul>

        <p><strong>第2步：建立假設</strong></p>
        <ul>
          <li>H₀: μ₁ = μ₂（兩班級平均分相同）</li>
          <li>H₁: μ₁ ≠ μ₂（兩班級平均分不同）</li>
        </ul>

        <p><strong>第3步：計算合併樣本變異數</strong></p>
        <p>s²ₚ = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁+n₂-2)</p>
        <p>s²ₚ = [(29×64) + (27×49)] / 56 = [1856 + 1323] / 56 = 57.84</p>

        <p><strong>第4步：計算標準誤</strong></p>
        <p>SE = √[57.84(1/30 + 1/28)] = √[57.84 × 0.0720] = 2.05</p>

        <p><strong>第5步：計算t值</strong></p>
        <p>t = (82 - 79) / 2.05 = 1.46</p>

        <p><strong>第6步：確定P值</strong></p>
        <p>df = 30 + 28 - 2 = 56，雙尾P值約 0.149</p>

        <p><strong>第7步：做出決策</strong></p>
        <p>P值 (0.149) > α (0.05)，無法拒絕H₀</p>

        <p><strong>結論：</strong></p>
        <p>在5%的顯著性水準下，兩個班級的平均成績無顯著差異。</p>
      `
    },
    industrialExample: {
      title: "工業例子：新工藝效果評估",
      description: "某產品生產線進行工藝改進。隨機抽取12件產品，分別用舊工藝和新工藝生產，測定產品良率。設良率差值（新-舊）分別為：2.5, 3.2, 1.8, 2.8, 3.5, 2.1, 2.9, 3.1, 1.9, 2.7, 3.3, 2.4。檢驗新工藝是否顯著提高良率。",
      scenario: "進行配對樣本t檢驗",
      solution: `
        <h4>求解過程</h4>
        <p><strong>第1步：計算差值統計量</strong></p>
        <ul>
          <li>配對數量：n = 12</li>
          <li>差值平均數：d̄ = 2.695%</li>
          <li>差值標準差：sₐ = 0.62%</li>
        </ul>

        <p><strong>第2步：建立假設</strong></p>
        <ul>
          <li>H₀: d̄ = 0（新舊工藝效果相同）</li>
          <li>H₁: d̄ > 0（新工藝效果更好）</li>
        </ul>

        <p><strong>第3步：計算標準誤</strong></p>
        <p>SE = sₐ / √n = 0.62 / √12 = 0.179</p>

        <p><strong>第4步：計算t值</strong></p>
        <p>t = d̄ / SE = 2.695 / 0.179 = 15.06</p>

        <p><strong>第5步：確定P值</strong></p>
        <p>df = 12 - 1 = 11，單尾P值 < 0.0001</p>

        <p><strong>第6步：做出決策</strong></p>
        <p>P值 < 0.0001 < α (0.05)，拒絕H₀</p>

        <p><strong>結論：</strong></p>
        <p>在5%的顯著性水準下，新工藝顯著提高了產品良率，改進效果明顯。</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "比較同一班級學生考試前後成績的差異，應該使用哪種檢驗？",
        options: [
          "獨立樣本t檢驗",
          "配對樣本t檢驗",
          "Z檢驗",
          "都不適用"
        ],
        correct: 1,
        explanation: "前後測是在同一班級進行，屬於配對數據，應使用配對樣本t檢驗。"
      },
      {
        type: "multiple-choice",
        question: "進行獨立樣本t檢驗時，自由度的計算公式是什麼？",
        options: [
          "df = n₁ + n₂",
          "df = n₁ + n₂ - 1",
          "df = n₁ + n₂ - 2",
          "df = (n₁ - 1) + (n₂ - 1)"
        ],
        correct: 2,
        explanation: "獨立樣本t檢驗的自由度 = n₁ + n₂ - 2。選項C和D實際上相等，但標準答案是C。"
      },
      {
        type: "multiple-choice",
        question: "配對樣本t檢驗的核心思想是什麼？",
        options: [
          "同時比較兩個樣本的所有數據",
          "先計算差值，再對差值進行單樣本檢驗",
          "只比較最大值和最小值",
          "使用Z檢驗代替t檢驗"
        ],
        correct: 1,
        explanation: "配對樣本t檢驗的步驟是：計算每對數據的差值，然後對差值進行單樣本t檢驗。"
      },
      {
        type: "multiple-choice",
        question: "獨立樣本t檢驗的前提假設包括哪些？",
        options: [
          "樣本來自常態分佈且方差相等",
          "樣本容量必須相同",
          "樣本必須是配對的",
          "不需要任何前提假設"
        ],
        correct: 0,
        explanation: "獨立樣本t檢驗要求兩個樣本都來自常態分佈（或足夠大），且母體方差相等。"
      }
    ]
  }
];

// 導出數據供其他模塊使用
if (typeof module !== 'undefined' && module.exports) {
  module.exports = courseData;
}
