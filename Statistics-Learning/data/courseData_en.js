// Statistics Learning Course Data - English Version

const courseData = [
  {
    id: 1,
    title: "Statistical Fundamentals & Descriptive Statistics",
    section: "DESCRIPTIVE STATISTICS",
    duration: "20 minutes",
    concepts: [
      {
        title: "Definition and Classification of Statistics",
        content: `
          <h3>Descriptive Statistics</h3>
          <p>Descriptive statistics is a method used to <strong>organize, summarize, and present data</strong>. It helps us describe the characteristics of data using numbers and charts without making inferences.</p>

          <h3>Inferential Statistics</h3>
          <p>Inferential statistics is a method used to <strong>draw conclusions about population characteristics from sample data</strong>. It uses probability theory and hypothesis testing to make inferences about the entire population.</p>

          <p><strong>Core Difference:</strong> Descriptive statistics answers "What is the data?", while inferential statistics answers "What can we infer about the population based on the sample?"</p>
        `
      },
      {
        title: "Data Types and Population vs Sample",
        content: `
          <h3>Data Types</h3>
          <ul>
            <li><strong>Categorical Data:</strong> Non-numerical characteristics, such as gender, color, rating</li>
            <li><strong>Quantitative Data:</strong> Measurable numerical values, such as height, test scores, sales</li>
            <li><strong>Discrete Data:</strong> Can only take specific values, such as number of students, number of products</li>
            <li><strong>Continuous Data:</strong> Can take any value within a range, such as time, weight, temperature</li>
          </ul>

          <h3>Population vs Sample</h3>
          <ul>
            <li><strong>Population:</strong> The entire set of objects we want to study</li>
            <li><strong>Sample:</strong> A subset of the population selected for observation</li>
          </ul>
        `
      },
      {
        title: "Descriptive Statistics Measures",
        content: `
          <h3>Measures of Central Tendency</h3>
          <ul>
            <li><strong>Mean:</strong> Sum of all values divided by the number of values; the most commonly used measure of location</li>
            <li><strong>Median:</strong> The middle value when data is arranged in order; not affected by extreme values</li>
            <li><strong>Mode:</strong> The most frequently occurring value; useful for categorical data</li>
          </ul>

          <h3>Measures of Variability</h3>
          <ul>
            <li><strong>Range:</strong> Maximum value minus minimum value; simple but affected by outliers</li>
            <li><strong>Standard Deviation:</strong> Measures the average distance of data points from the mean</li>
            <li><strong>Variance:</strong> The square of the standard deviation</li>
          </ul>

          <p><strong>Formulas:</strong></p>
          <p>Mean: μ = Σx / n</p>
          <p>Standard Deviation: σ = √[Σ(x-μ)² / n]</p>
        `
      },
      {
        title: "Histogram",
        content: `
          <h3>Definition and Purpose of Histogram</h3>
          <p>A histogram is a chart used to display the distribution of data by grouping data into bins (classes). The height of each bar represents the frequency of that bin.</p>

          <h3>Characteristics of Histogram</h3>
          <ul>
            <li><strong>X-axis:</strong> The range of data values (after binning)</li>
            <li><strong>Y-axis:</strong> The frequency or relative frequency within each bin</li>
            <li><strong>Bar width:</strong> Represents the width of each bin</li>
            <li><strong>Bar height:</strong> Represents the number of observations in that bin</li>
          </ul>

          <h3>What Can a Histogram Tell Us?</h3>
          <ul>
            <li>The <strong>shape of the distribution</strong> (bell-shaped, skewed left, skewed right, etc.)</li>
            <li>The <strong>center of the distribution</strong> (where most data is concentrated)</li>
            <li>The <strong>spread of the data</strong> (how dispersed the data is)</li>
            <li>Whether there are <strong>outliers or unusual patterns</strong></li>
          </ul>

          <h4>Histogram Example</h4>
          <div style="text-align: center; margin: 1.5rem 0;">
            <img src="assets/histogram.svg" alt="Histogram" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 0.5rem;">
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
              Figure: Example histogram showing frequency distribution of data
            </p>
          </div>

          <p><strong>Example:</strong> A histogram of class grades typically shows a bell-shaped distribution, indicating that most students' grades are concentrated at a middle level.</p>
        `
      },
      {
        title: "Box Plot",
        content: `
          <h3>Definition of Box Plot</h3>
          <p>A box plot (also called a box-and-whisker plot) is a chart that uses five numbers to summarize a distribution. These five numbers are:</p>
          <ul>
            <li><strong>Minimum (MIN):</strong> The smallest value in the data</li>
            <li><strong>First Quartile (Q1):</strong> The boundary for the lower 25% of data</li>
            <li><strong>Median/Second Quartile (Q2):</strong> The boundary for the middle 50% of data</li>
            <li><strong>Third Quartile (Q3):</strong> The boundary for the upper 25% of data</li>
            <li><strong>Maximum (MAX):</strong> The largest value in the data</li>
          </ul>

          <h3>Structure of a Box Plot</h3>
          <ul>
            <li><strong>Box:</strong> Represents the middle 50% of data (from Q1 to Q3); width represents IQR (Interquartile Range = Q3 - Q1)</li>
            <li><strong>Line in the box:</strong> Represents the median</li>
            <li><strong>Whiskers:</strong> Extend from the box to the minimum and maximum values</li>
            <li><strong>Points (Outliers):</strong> Values beyond the whisker range are typically marked as outliers</li>
          </ul>

          <h4>Box Plot Illustration</h4>
          <div style="text-align: center; margin: 1.5rem 0;">
            <img src="assets/boxplot.svg" alt="Box Plot" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 0.5rem;">
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
              Figure: Box plot structure showing MIN, Q1, MEDIAN, Q3, MAX, and outliers
            </p>
          </div>

          <h3>Advantages of Box Plot</h3>
          <ul>
            <li>Quickly shows the <strong>spread and symmetry</strong> of data</li>
            <li>Clearly <strong>identifies outliers</strong></li>
            <li>Easy to <strong>compare multiple datasets</strong></li>
            <li>Not affected by extreme values; more stable than mean</li>
          </ul>

          <p><strong>Example:</strong> Box plots of two classes' grades can quickly show which class has more variation and which has more outliers.</p>
        `
      }
    ],
    example: {
      title: "Education Example: Class Grade Analysis",
      description: "Final exam scores of 30 students in a class (out of 100)",
      data: [78, 82, 85, 88, 92, 75, 88, 91, 87, 83, 79, 84, 86, 90, 92, 81, 85, 89, 88, 84, 76, 87, 91, 85, 80, 89, 86, 84, 82, 88],
      analysis: `
        <h4>Analysis Results</h4>
        <ul>
          <li><strong>Mean Score:</strong> 85.2 points</li>
          <li><strong>Median:</strong> 85.5 points</li>
          <li><strong>Standard Deviation:</strong> 5.3 points</li>
          <li><strong>Range:</strong> 92 - 75 = 17 points</li>
          <li><strong>Q1 (First Quartile):</strong> 82 points (boundary for lower 25% of students)</li>
          <li><strong>Q3 (Third Quartile):</strong> 89 points (boundary for upper 25% of students)</li>
          <li><strong>IQR (Interquartile Range):</strong> 89 - 82 = 7 points</li>
        </ul>

        <h4>Histogram Interpretation</h4>
        <p>The histogram of grades shows an approximately <strong>bell-shaped distribution</strong> with:</p>
        <ul>
          <li>Most students concentrated in the 85-89 point range (13 students, highest frequency)</li>
          <li>Second highest frequency in 80-84 range (8 students)</li>
          <li>Lower tail (75-79 points): 4 students</li>
          <li>Upper tail (90-94 points): 5 students</li>
          <li>Relatively symmetric distribution with no obvious skew</li>
        </ul>
        <p>This bell-shaped histogram indicates normal grade distribution with most students performing at a medium level and few extreme performers.</p>

        <h4>Box Plot Interpretation</h4>
        <p>The box plot of grades shows:</p>
        <ul>
          <li><strong>Box length (from 82 to 89):</strong> Represents the middle 50% of student grades, length of 7 points</li>
          <li><strong>Line in the box (85.5):</strong> The median is slightly closer to Q1, indicating mid-range grades are slightly lower</li>
          <li><strong>Lower whisker (75 to 82):</strong> Shows the range for the lower 25% of students</li>
          <li><strong>Upper whisker (89 to 92):</strong> Shows the range for the upper 25% of students</li>
          <li><strong>No outliers marked:</strong> Indicates no unusually high or low grades</li>
        </ul>
        <p><strong>Descriptive Statistics Tells Us:</strong> The class has good overall performance (mean 85.2), relatively concentrated grade distribution (IQR = 7), with no extreme outliers. The class shows stable and consistent academic achievement.</p>
      `
    },
    industrialExample: {
      title: "Industrial Example: Product Weight Inspection",
      description: "Weight measurements (in grams) of 30 products inspected by a factory",
      data: [498, 502, 501, 499, 503, 497, 500, 502, 501, 498, 499, 503, 502, 500, 499, 501, 498, 503, 500, 502, 499, 501, 498, 502, 501, 500, 499, 502, 501, 500],
      analysis: `
        <h4>Analysis Results</h4>
        <ul>
          <li><strong>Mean Weight:</strong> 500.2 grams</li>
          <li><strong>Median:</strong> 500.5 grams</li>
          <li><strong>Standard Deviation:</strong> 1.53 grams</li>
          <li><strong>Range:</strong> 503 - 497 = 6 grams</li>
          <li><strong>Q1 (First Quartile):</strong> 499 grams</li>
          <li><strong>Q3 (Third Quartile):</strong> 502 grams</li>
          <li><strong>IQR (Interquartile Range):</strong> 502 - 499 = 3 grams</li>
        </ul>

        <h4>Histogram Interpretation</h4>
        <p>The histogram of product weights shows a <strong>very narrow distribution</strong> concentrated in two ranges:</p>
        <ul>
          <li>497-501 grams range contains 19 products (63% of total)</li>
          <li>502-506 grams range contains 11 products (37% of total)</li>
          <li>Product weight variation is minimal, indicating excellent process control</li>
          <li>Very sharp and narrow distribution shows stable manufacturing quality</li>
        </ul>
        <p>This narrow histogram demonstrates very stable manufacturing processes and excellent quality control.</p>

        <h4>Box Plot Interpretation</h4>
        <p>The box plot of product weights shows:</p>
        <ul>
          <li><strong>Box length (from 499 to 502):</strong> Extremely short (only 3 grams), indicating the middle 50% of products are very close to target</li>
          <li><strong>Line in the box (500.5):</strong> Nearly centered, showing relatively symmetric distribution</li>
          <li><strong>Whisker length:</strong> Short relative to the box, indicating minimal variation</li>
          <li><strong>No outliers:</strong> All product weights are within acceptable range</li>
        </ul>

        <p><strong>Descriptive Statistics Tells Us:</strong> Mean weight is 500.2g (very close to target 500g), variability is extremely small (standard deviation 1.53g, IQR = 3g), and all products are within the 497-503g acceptable range. Excellent process control, stable product quality, and compliance with quality standards. This production line can confidently deliver products to customers.</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "Which statement most accurately distinguishes descriptive statistics from inferential statistics?",
        options: [
          "Descriptive statistics is used for big data, inferential statistics for small data",
          "Descriptive statistics describes characteristics of existing data, inferential statistics infers population characteristics from sample data",
          "Descriptive statistics is used only in education, inferential statistics in industry",
          "There is no difference between descriptive and inferential statistics"
        ],
        correct: 1,
        explanation: "Descriptive statistics aims to summarize and present data, while inferential statistics uses probability methods to infer about the population from samples."
      },
      {
        type: "multiple-choice",
        question: "In the class grade analysis example, what does the 30 students' grades represent?",
        options: [
          "Population",
          "Sample",
          "Parameter",
          "Statistic"
        ],
        correct: 0,
        explanation: "In this study, the 30 students represent all subjects being studied, constituting the population."
      },
      {
        type: "multiple-choice",
        question: "Product weight averages 500.2g with standard deviation 1.53g. Which statement is most appropriate?",
        options: [
          "All products weigh the same",
          "About 95% of products weigh between 500.2±3 grams",
          "Product weight has very low variability and is relatively stable",
          "Larger standard deviation indicates better quality"
        ],
        correct: 2,
        explanation: "Standard deviation measures data variability. 1.53g represents relatively small variation, indicating stable product weight."
      },
      {
        type: "calculation",
        question: "Calculate the mean of: 88, 92, 85, 90, 95",
        correctAnswer: 90,
        tolerance: 0.1,
        explanation: "Mean = (88+92+85+90+95)/5 = 450/5 = 90"
      }
    ]
  },

  {
    id: 2,
    title: "Probability Distributions",
    section: "INFERENTIAL STATISTICS",
    duration: "25 minutes",
    concepts: [
      {
        title: "Understanding Normal Distribution",
        content: `
          <h3>Normal Distribution</h3>
          <p>Normal distribution is the most important probability distribution in statistics, with the following characteristics:</p>
          <ul>
            <li>Forms a bell-shaped curve that is symmetric</li>
            <li>Mean, median, and mode are all equal and located at the center</li>
            <li>Approximately 68.2% of data falls within μ±1σ</li>
            <li>Approximately 95.4% of data falls within μ±2σ</li>
            <li>Approximately 99.7% of data falls within μ±3σ</li>
          </ul>
          <p><strong>Many natural phenomena approximate normal distribution:</strong> Student heights, test scores, product dimensions, etc.</p>

          <h4>Normal Distribution Visualization</h4>
          <div style="text-align: center; margin: 1.5rem 0;">
            <img src="assets/normal_distribution.svg" alt="Normal Distribution Curve" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 0.5rem;">
            <p style="font-size: 0.9rem; color: #666; margin-top: 0.5rem;">
              Figure: Normal distribution curve showing 68.2%, 95.4%, and 99.7% ranges
            </p>
          </div>
        `
      },
      {
        title: "Standardization",
        content: `
          <h3>Z-score Standardization</h3>
          <p>Transform any normal distribution to a <strong>standard normal distribution</strong> (mean=0, standard deviation=1) for easy comparison and table lookup.</p>

          <p><strong>Formula:</strong> z = (x - μ) / σ</p>

          <p>Where:</p>
          <ul>
            <li>x = original value</li>
            <li>μ = mean</li>
            <li>σ = standard deviation</li>
            <li>z = standardized value</li>
          </ul>

          <p><strong>Meaning of Z-score:</strong></p>
          <ul>
            <li>z = 0: Value equals the mean</li>
            <li>z > 0: Value is above the mean</li>
            <li>z < 0: Value is below the mean</li>
            <li>Larger |z|: Value is farther from the mean</li>
          </ul>
        `
      },
      {
        title: "Using Standard Normal Distribution Tables",
        content: `
          <h3>Finding Probabilities</h3>
          <p>Using standard normal distribution tables, we can find the cumulative probability corresponding to any z value.</p>

          <p><strong>Common z values and probabilities:</strong></p>
          <ul>
            <li>z = 1.00: Cumulative probability 0.8413 (84.13%)</li>
            <li>z = 1.96: Cumulative probability 0.9750 (97.50%)</li>
            <li>z = 2.00: Cumulative probability 0.9772 (97.72%)</li>
            <li>z = 2.58: Cumulative probability 0.9951 (99.51%)</li>
          </ul>
        `
      }
    ],
    example: {
      title: "Education Example: Exam Score Distribution",
      description: "National exam scores approximately follow normal distribution with mean 70 and standard deviation 10",
      scenario: "A student scores 86. Find:\n1. The student's z-score\n2. The percentage of students scoring below this student",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Calculate z-score</strong></p>
        <p>z = (86 - 70) / 10 = 1.6</p>

        <p><strong>Step 2: Look up standard normal table</strong></p>
        <p>z = 1.6 corresponds to cumulative probability ≈ 0.9452</p>

        <p><strong>Conclusion:</strong></p>
        <ul>
          <li>Student's score is 1.6 standard deviations above the mean</li>
          <li>Approximately 94.52% of students score below this student</li>
          <li>Student ranks approximately in top 5.48%</li>
        </ul>
      `
    },
    industrialExample: {
      title: "Industrial Example: Product Dimension Inspection",
      description: "Factory-produced bolts have diameters approximately following normal distribution with mean 10.0mm and standard deviation 0.05mm. Specifications require 9.9-10.1mm.",
      scenario: "Find:\n1. Z-score when bolt diameter is 10.15mm\n2. Percentage of bolts meeting specifications",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Calculate z-scores for boundaries</strong></p>
        <p>Lower limit: z = (9.9 - 10.0) / 0.05 = -2.0</p>
        <p>Upper limit: z = (10.1 - 10.0) / 0.05 = 2.0</p>

        <p><strong>Step 2: Look up standard normal table</strong></p>
        <p>z = -2.0 corresponds to probability 0.0228</p>
        <p>z = 2.0 corresponds to probability 0.9772</p>

        <p><strong>Step 3: Calculate proportion meeting specifications</strong></p>
        <p>Specification compliance = 0.9772 - 0.0228 = 0.9544 = 95.44%</p>

        <p><strong>Conclusion:</strong></p>
        <ul>
          <li>Approximately 95.44% of bolts meet specifications</li>
          <li>Process control needs improvement to reduce non-conforming products</li>
        </ul>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "In normal distribution, approximately what percentage of data falls within μ±2σ?",
        options: [
          "68.2%",
          "95.4%",
          "99.7%",
          "99%"
        ],
        correct: 1,
        explanation: "According to normal distribution properties, approximately 95.4% of data falls within mean ± 2 standard deviations."
      },
      {
        type: "calculation",
        question: "Mean is 70, standard deviation is 5. Score is 80. Find z-score (round to 2 decimal places)",
        correctAnswer: 2.0,
        tolerance: 0.05,
        explanation: "z = (80-70)/5 = 10/5 = 2.0"
      },
      {
        type: "multiple-choice",
        question: "What does z = 0 mean in standard normal distribution?",
        options: [
          "Score is 0",
          "All subjects pass",
          "Value equals the mean",
          "Standard deviation is 0"
        ],
        correct: 2,
        explanation: "z-score = 0 means the value exactly equals the mean, which is the center of normal distribution."
      },
      {
        type: "multiple-choice",
        question: "Which statement about z-score is most correct?",
        options: [
          "Z-score can only be used for normal distribution",
          "Z-score can be negative",
          "Larger z-score always means better",
          "Z-score is always between 0 and 1"
        ],
        correct: 1,
        explanation: "Z-score can be positive (above mean) or negative (below mean), representing a value's distance from the mean."
      }
    ]
  },

  {
    id: 3,
    title: "Sampling Distribution and Central Limit Theorem",
    section: "INFERENTIAL STATISTICS",
    duration: "25 minutes",
    concepts: [
      {
        title: "Sample and Sampling Distribution",
        content: `
          <h3>Sampling Distribution</h3>
          <p>A sampling distribution is the distribution of a statistic (such as mean) obtained from repeated samples drawn from the same population.</p>

          <p><strong>Properties of sampling distribution:</strong></p>
          <ul>
            <li>Mean of sample means = Population mean (μ)</li>
            <li>Standard deviation of sample means = Population standard deviation / √n</li>
            <li>Larger sample size results in sample means closer to population mean</li>
          </ul>

          <h3>Standard Error</h3>
          <p>Standard error is the standard deviation of sample means. Formula: SE = σ / √n</p>
          <p>Smaller standard error means more reliable estimates.</p>
        `
      },
      {
        title: "Central Limit Theorem",
        content: `
          <h3>Central Limit Theorem (CLT)</h3>
          <p>One of the most important theorems in statistics:</p>

          <p><strong>Theorem Statement:</strong></p>
          <p>Regardless of the population distribution's shape, when sample size n is large enough (typically n≥30), the distribution of sample means will approximate a normal distribution.</p>

          <p><strong>Important Implications:</strong></p>
          <ul>
            <li>Sample means follow normal distribution even if population doesn't</li>
            <li>Larger sample size better approximates normal distribution</li>
            <li>This enables us to use normal distribution for inferential statistics</li>
          </ul>
        `
      },
      {
        title: "Applications of Central Limit Theorem",
        content: `
          <h3>Calculating Sample Mean Probability</h3>
          <p>Using CLT, we can calculate the probability of sample mean falling within a range.</p>

          <p><strong>Steps:</strong></p>
          <ol>
            <li>Calculate standard error: SE = σ / √n</li>
            <li>Calculate z-score: z = (x̄ - μ) / SE</li>
            <li>Look up normal table to find probability</li>
          </ol>
        `
      }
    ],
    example: {
      title: "Education Example: Student Height Survey",
      description: "College students' average height is 170cm with standard deviation 8cm. Random sample of 25 students taken.",
      scenario: "Find the probability that sample mean height is between 169 and 171cm",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Calculate standard error</strong></p>
        <p>SE = σ / √n = 8 / √25 = 8 / 5 = 1.6cm</p>

        <p><strong>Step 2: Calculate boundary z-scores</strong></p>
        <p>Lower: z = (169 - 170) / 1.6 = -0.625</p>
        <p>Upper: z = (171 - 170) / 1.6 = 0.625</p>

        <p><strong>Step 3: Look up normal table</strong></p>
        <p>z = -0.625 corresponds to probability ≈ 0.2660</p>
        <p>z = 0.625 corresponds to probability ≈ 0.7340</p>

        <p><strong>Conclusion:</strong></p>
        <p>Probability = 0.7340 - 0.2660 = 0.4680 ≈ 46.8%</p>
        <p>There's approximately 46.8% chance the sample mean height is between 169-171cm</p>
      `
    },
    industrialExample: {
      title: "Industrial Example: Battery Life Testing",
      description: "Batteries have average life of 1000 hours with standard deviation 100 hours. Monthly sample of 36 batteries tested.",
      scenario: "Find the probability that sample mean life is between 990-1010 hours",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Calculate standard error</strong></p>
        <p>SE = σ / √n = 100 / √36 = 100 / 6 = 16.67 hours</p>

        <p><strong>Step 2: Calculate boundary z-scores</strong></p>
        <p>Lower: z = (990 - 1000) / 16.67 = -0.6</p>
        <p>Upper: z = (1010 - 1000) / 16.67 = 0.6</p>

        <p><strong>Step 3: Look up normal table</strong></p>
        <p>z = -0.6 corresponds to probability ≈ 0.2743</p>
        <p>z = 0.6 corresponds to probability ≈ 0.7257</p>

        <p><strong>Conclusion:</strong></p>
        <p>Probability = 0.7257 - 0.2743 = 0.4514 ≈ 45.14%</p>
        <p>Approximately 45.14% chance monthly sample mean life is 990-1010 hours</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "What important conclusion does Central Limit Theorem establish?",
        options: [
          "Population mean equals sample mean",
          "Larger sample is less reliable",
          "Sample means approximate normal distribution when n is large, even if population isn't normal",
          "All sample means are identical"
        ],
        correct: 2,
        explanation: "CLT's core insight: sample means follow normal distribution for large n regardless of population distribution."
      },
      {
        type: "calculation",
        question: "Population standard deviation is 20, sample size 100. Find standard error (round to 1 decimal place)",
        correctAnswer: 2.0,
        tolerance: 0.1,
        explanation: "SE = σ / √n = 20 / √100 = 20 / 10 = 2.0"
      },
      {
        type: "multiple-choice",
        question: "To reduce standard error, what should be done?",
        options: [
          "Decrease sample size",
          "Increase sample size",
          "Lower population mean",
          "Increase population standard deviation"
        ],
        correct: 1,
        explanation: "SE = σ / √n. Increasing n reduces SE, making sample estimates more precise."
      },
      {
        type: "multiple-choice",
        question: "What is the standard deviation of sample means called?",
        options: [
          "Population standard deviation",
          "Standard error",
          "Range",
          "Variance"
        ],
        correct: 1,
        explanation: "Standard error is the standard deviation of sample means, measuring estimate precision."
      }
    ]
  },

  {
    id: 4,
    title: "Confidence Intervals",
    section: "INFERENTIAL STATISTICS",
    duration: "25 minutes",
    concepts: [
      {
        title: "Point and Interval Estimation",
        content: `
          <h3>Point Estimation</h3>
          <p>Using a single sample statistic to estimate a population parameter.</p>
          <p><strong>Example:</strong> Using sample mean to estimate population mean</p>
          <p><strong>Disadvantage:</strong> Very low probability of being exactly correct; doesn't show reliability</p>

          <h3>Interval Estimation</h3>
          <p>Providing a range of values indicating probable range for population parameter.</p>
          <p><strong>More practical:</strong> Provides information about estimate reliability</p>
        `
      },
      {
        title: "Confidence Intervals and Confidence Levels",
        content: `
          <h3>Confidence Interval</h3>
          <p>An interval estimated from sample data indicating the probable range for population parameter.</p>

          <h3>Confidence Level</h3>
          <p>Indicates how confident we are that the interval contains true parameter. Common levels:</p>
          <ul>
            <li>90% confidence level (α=0.10)</li>
            <li>95% confidence level (α=0.05)</li>
            <li>99% confidence level (α=0.01)</li>
          </ul>

          <p><strong>Correct Interpretation:</strong> 95% CI doesn't mean 95% probability true value is in interval. Rather, if we repeatedly sampled, approximately 95% of intervals would contain the true value.</p>
        `
      },
      {
        title: "Calculating Confidence Intervals",
        content: `
          <h3>Large Sample Case (n≥30): Using Z-distribution</h3>
          <p><strong>Formula:</strong> Confidence Interval = x̄ ± z*(SE)</p>

          <p>Where:</p>
          <ul>
            <li>x̄ = sample mean</li>
            <li>z* = z value for chosen confidence level</li>
            <li>SE = σ / √n (standard error)</li>
          </ul>

          <p><strong>Common z* values:</strong></p>
          <ul>
            <li>90% confidence level: z* = 1.645</li>
            <li>95% confidence level: z* = 1.96</li>
            <li>99% confidence level: z* = 2.576</li>
          </ul>

          <h3>Small Sample Case (n<30): Using t-distribution</h3>
          <p><strong>Formula:</strong> Confidence Interval = x̄ ± t*(s / √n)</p>
          <p>Where s is sample standard deviation and t* from t-distribution table</p>
        `
      }
    ],
    example: {
      title: "Education Example: Class Average Grade Estimation",
      description: "30 students randomly selected, mean grade 82, standard deviation 6. Find 95% confidence interval for class average.",
      scenario: "Calculate confidence interval and interpret results",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Identify information</strong></p>
        <ul>
          <li>Sample size: n = 30 (≥30, use Z-distribution)</li>
          <li>Sample mean: x̄ = 82</li>
          <li>Standard deviation: σ = 6</li>
          <li>Confidence level: 95%, z* = 1.96</li>
        </ul>

        <p><strong>Step 2: Calculate standard error</strong></p>
        <p>SE = σ / √n = 6 / √30 = 6 / 5.477 = 1.095</p>

        <p><strong>Step 3: Calculate margin of error</strong></p>
        <p>Margin = z* × SE = 1.96 × 1.095 = 2.145</p>

        <p><strong>Step 4: Calculate confidence interval</strong></p>
        <p>Lower limit = 82 - 2.145 = 79.855</p>
        <p>Upper limit = 82 + 2.145 = 84.145</p>

        <p><strong>Conclusion:</strong></p>
        <p>We are 95% confident that the class average grade is between 79.86 and 84.15 points.</p>
      `
    },
    industrialExample: {
      title: "Industrial Example: Product Life Estimation",
      description: "40 light bulbs tested with mean life 1200 hours and standard deviation 80 hours. Find 99% confidence interval for bulb life.",
      scenario: "Calculate confidence interval and assess product quality",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Identify information</strong></p>
        <ul>
          <li>Sample size: n = 40 (≥30, use Z-distribution)</li>
          <li>Sample mean: x̄ = 1200 hours</li>
          <li>Standard deviation: σ = 80 hours</li>
          <li>Confidence level: 99%, z* = 2.576</li>
        </ul>

        <p><strong>Step 2: Calculate standard error</strong></p>
        <p>SE = σ / √n = 80 / √40 = 80 / 6.325 = 12.65 hours</p>

        <p><strong>Step 3: Calculate margin of error</strong></p>
        <p>Margin = z* × SE = 2.576 × 12.65 = 32.59 hours</p>

        <p><strong>Step 4: Calculate confidence interval</strong></p>
        <p>Lower limit = 1200 - 32.59 = 1167.41 hours</p>
        <p>Upper limit = 1200 + 32.59 = 1232.59 hours</p>

        <p><strong>Conclusion:</strong></p>
        <p>We are 99% confident that average bulb life is between 1167 and 1233 hours.</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "Which is the most correct description of confidence interval?",
        options: [
          "95% CI means 95% probability true value is in interval",
          "95% CI means if we repeat sampling, approximately 95% of intervals contain true value",
          "All values in interval have same probability",
          "Wider interval is always better"
        ],
        correct: 1,
        explanation: "Correct interpretation: 95% CI means this method will capture true value 95% of the time over repeated sampling."
      },
      {
        type: "calculation",
        question: "Sample mean 85, standard error 2, 95% confidence level (z*=1.96). Find lower limit of CI.",
        correctAnswer: 81.08,
        tolerance: 0.1,
        explanation: "Lower = 85 - (1.96 × 2) = 85 - 3.92 = 81.08"
      },
      {
        type: "multiple-choice",
        question: "How to obtain narrower confidence interval?",
        options: [
          "Lower confidence level",
          "Increase sample size",
          "Increase population standard deviation",
          "Cannot change"
        ],
        correct: 1,
        explanation: "Larger sample size reduces standard error, narrowing the confidence interval."
      },
      {
        type: "multiple-choice",
        question: "What z* value corresponds to 99% confidence level?",
        options: [
          "1.645",
          "1.96",
          "2.576",
          "3.00"
        ],
        correct: 2,
        explanation: "99% confidence uses z* = 2.576; 95% uses 1.96; 90% uses 1.645."
      }
    ]
  },

  {
    id: 5,
    title: "Fundamentals of Hypothesis Testing",
    section: "INFERENTIAL STATISTICS",
    duration: "30 minutes",
    concepts: [
      {
        title: "Basic Concepts of Hypothesis Testing",
        content: `
          <h3>Hypothesis Testing</h3>
          <p>One of the most important methods in inferential statistics, used to decide whether to accept or reject a claim about population.</p>

          <h3>Null and Alternative Hypotheses</h3>
          <ul>
            <li><strong>Null Hypothesis (H₀):</strong> The assumption we presume true, usually stating "no difference" or "no effect"</li>
            <li><strong>Alternative Hypothesis (H₁):</strong> The opposite of null hypothesis; what we want to test</li>
          </ul>

          <p><strong>Example:</strong></p>
          <ul>
            <li>H₀: New teaching method and old method have same effect (μ₁ = μ₂)</li>
            <li>H₁: New method is more effective (μ₁ > μ₂)</li>
          </ul>
        `
      },
      {
        title: "Significance Level and P-value",
        content: `
          <h3>Significance Level (α)</h3>
          <p>The threshold we set for rejecting H₀. Common values:</p>
          <ul>
            <li>α = 0.05 (5%, most common)</li>
            <li>α = 0.01 (1%, more stringent)</li>
            <li>α = 0.10 (10%, more lenient)</li>
          </ul>

          <h3>P-value</h3>
          <p>The probability of obtaining current or more extreme results if H₀ is true.</p>

          <p><strong>Decision Rule:</strong></p>
          <ul>
            <li>If P-value < α: Reject H₀ (result is statistically significant)</li>
            <li>If P-value ≥ α: Fail to reject H₀ (result is not statistically significant)</li>
          </ul>

          <p><strong>Correct Interpretation of P-value:</strong> P-value is NOT the probability H₀ is true. Rather, it's the probability of observing this or more extreme data given H₀ is true.</p>
        `
      },
      {
        title: "Type I and Type II Errors",
        content: `
          <h3>Errors in Hypothesis Testing</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border:1px solid #ddd;">
              <th style="border:1px solid #ddd; padding:8px;">Decision</th>
              <th style="border:1px solid #ddd; padding:8px;">H₀ True</th>
              <th style="border:1px solid #ddd; padding:8px;">H₀ False</th>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;"><strong>Accept H₀</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">Correct Decision</td>
              <td style="border:1px solid #ddd; padding:8px;">Type II Error (β)</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;"><strong>Reject H₀</strong></td>
              <td style="border:1px solid #ddd; padding:8px;">Type I Error (α)</td>
              <td style="border:1px solid #ddd; padding:8px;">Correct Decision</td>
            </tr>
          </table>

          <p><strong>Type I Error:</strong> Rejecting H₀ when it's actually true. Called "false positive".</p>
          <p><strong>Type II Error:</strong> Accepting H₀ when it's actually false. Called "false negative".</p>
        `
      },
      {
        title: "Steps in Hypothesis Testing",
        content: `
          <h3>Standard Procedure for Hypothesis Testing</h3>
          <ol>
            <li><strong>Set up hypotheses:</strong> Establish H₀ and H₁</li>
            <li><strong>Choose significance level:</strong> Usually α = 0.05</li>
            <li><strong>Select test method:</strong> Based on data characteristics (Z test, t test, etc.)</li>
            <li><strong>Calculate test statistic:</strong> From sample data</li>
            <li><strong>Find P-value or critical value:</strong> Determine if in rejection region</li>
            <li><strong>Make decision:</strong> Compare P-value with α, reject or accept H₀</li>
            <li><strong>State conclusion:</strong> Interpret results in practical terms</li>
          </ol>
        `
      }
    ],
    example: {
      title: "Education Example: Teaching Method Effectiveness",
      description: "New teaching method used in class of 30 students with mean score 85 and standard deviation 8. Historical data shows traditional method mean score is 82. Test if new method is more effective.",
      scenario: "Conduct hypothesis test to judge teaching method effectiveness",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Set up hypotheses</strong></p>
        <ul>
          <li>H₀: μ = 82 (new method same as old)</li>
          <li>H₁: μ > 82 (new method better)</li>
        </ul>

        <p><strong>Step 2: Choose significance level</strong></p>
        <p>α = 0.05</p>

        <p><strong>Step 3: Select test method</strong></p>
        <p>n = 30 ≥ 30, use Z test</p>

        <p><strong>Step 4: Calculate test statistic</strong></p>
        <p>SE = σ / √n = 8 / √30 = 1.46</p>
        <p>z = (x̄ - μ) / SE = (85 - 82) / 1.46 = 2.05</p>

        <p><strong>Step 5: Find P-value</strong></p>
        <p>z = 2.05, one-tailed P-value ≈ 0.0202</p>

        <p><strong>Step 6: Make decision</strong></p>
        <p>P-value (0.0202) < α (0.05), reject H₀</p>

        <p><strong>Conclusion:</strong></p>
        <p>At 5% significance level, new teaching method is significantly more effective than old method.</p>
      `
    },
    industrialExample: {
      title: "Industrial Example: Component Dimension Testing",
      description: "Component target diameter is 50mm. Sample of 36 components measured with mean 50.5mm and standard deviation 1.2mm. Test if process deviates from specification.",
      scenario: "Conduct hypothesis test to judge process control",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Set up hypotheses</strong></p>
        <ul>
          <li>H₀: μ = 50 (process on target)</li>
          <li>H₁: μ ≠ 50 (process deviates)</li>
        </ul>

        <p><strong>Step 2: Choose significance level</strong></p>
        <p>α = 0.05</p>

        <p><strong>Step 3: Select test method</strong></p>
        <p>n = 36 ≥ 30, use Z test (two-tailed)</p>

        <p><strong>Step 4: Calculate test statistic</strong></p>
        <p>SE = σ / √n = 1.2 / √36 = 0.2</p>
        <p>z = (x̄ - μ) / SE = (50.5 - 50) / 0.2 = 2.5</p>

        <p><strong>Step 5: Find P-value</strong></p>
        <p>z = 2.5, two-tailed P-value ≈ 0.0124</p>

        <p><strong>Step 6: Make decision</strong></p>
        <p>P-value (0.0124) < α (0.05), reject H₀</p>

        <p><strong>Conclusion:</strong></p>
        <p>At 5% significance level, component diameter significantly deviates from 50mm specification. Process adjustment needed.</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "What does null hypothesis (H₀) typically state?",
        options: [
          "What we want to prove",
          "No difference or no effect",
          "Sample characteristics",
          "Set significance level"
        ],
        correct: 1,
        explanation: "Null hypothesis usually states no difference, no effect, or no relationship - the default assumption."
      },
      {
        type: "multiple-choice",
        question: "When P-value = 0.03 and α = 0.05, what decision?",
        options: [
          "Accept H₀",
          "Reject H₀",
          "Cannot determine",
          "Increase sample size"
        ],
        correct: 1,
        explanation: "When P-value < α, reject H₀ and conclude result is statistically significant."
      },
      {
        type: "multiple-choice",
        question: "What is Type I error (α)?",
        options: [
          "Accept H₀ when H₁ is true",
          "Reject H₀ when H₀ is true",
          "Sample size too small",
          "Wrong test method selected"
        ],
        correct: 1,
        explanation: "Type I error is rejecting H₀ when it's actually true - a false positive."
      },
      {
        type: "multiple-choice",
        question: "What is the correct meaning of P-value?",
        options: [
          "Probability H₀ is true",
          "Probability H₁ is true",
          "Probability of obtaining current or more extreme data given H₀ is true",
          "Probability sample mean is correct"
        ],
        correct: 2,
        explanation: "P-value is the probability of observing this data or more extreme, assuming H₀ is true - not the probability H₀ is true."
      }
    ]
  },

  {
    id: 6,
    title: "Single Sample Tests",
    section: "INFERENTIAL STATISTICS",
    duration: "30 minutes",
    concepts: [
      {
        title: "Choosing Between Z-test and t-test",
        content: `
          <h3>Z-test</h3>
          <p>Used for large samples (n ≥ 30) when population standard deviation is known or sample is large enough</p>
          <p><strong>Test statistic:</strong> z = (x̄ - μ) / (σ / √n)</p>

          <h3>t-test</h3>
          <p>Used for small samples (n < 30) when population standard deviation is unknown</p>
          <p><strong>Test statistic:</strong> t = (x̄ - μ) / (s / √n)</p>

          <p><strong>Comparison:</strong></p>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border:1px solid #ddd;">
              <th style="border:1px solid #ddd; padding:8px;">Feature</th>
              <th style="border:1px solid #ddd; padding:8px;">Z-test</th>
              <th style="border:1px solid #ddd; padding:8px;">t-test</th>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Sample Size</td>
              <td style="border:1px solid #ddd; padding:8px;">n ≥ 30</td>
              <td style="border:1px solid #ddd; padding:8px;">n < 30</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Population Std Dev</td>
              <td style="border:1px solid #ddd; padding:8px;">Known or unknown</td>
              <td style="border:1px solid #ddd; padding:8px;">Unknown</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Distribution</td>
              <td style="border:1px solid #ddd; padding:8px;">Normal</td>
              <td style="border:1px solid #ddd; padding:8px;">t-distribution</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Degrees of Freedom</td>
              <td style="border:1px solid #ddd; padding:8px;">Not needed</td>
              <td style="border:1px solid #ddd; padding:8px;">df = n - 1</td>
            </tr>
          </table>
        `
      },
      {
        title: "t-distribution and Degrees of Freedom",
        content: `
          <h3>t-distribution</h3>
          <p>Discovered by William Gosset in 1908, used for small samples.</p>

          <p><strong>Characteristics:</strong></p>
          <ul>
            <li>Looks like normal distribution but with thicker tails</li>
            <li>Approaches normal distribution as degrees of freedom increase</li>
            <li>Requires considering degrees of freedom (df) for table lookup</li>
          </ul>

          <h3>Degrees of Freedom (df)</h3>
          <p>The number of values that can vary freely in a sample.</p>
          <p><strong>Single sample:</strong> df = n - 1</p>

          <p><strong>Example:</strong> If n = 20, then df = 19</p>
        `
      },
      {
        title: "Conducting Single Sample Tests",
        content: `
          <h3>Steps for Single Sample Testing</h3>
          <ol>
            <li>Confirm sample size and standard deviation known status</li>
            <li>Decide Z-test or t-test</li>
            <li>Calculate test statistic</li>
            <li>Look up critical value based on df (if t-test)</li>
            <li>Compare with significance level and decide</li>
          </ol>
        `
      }
    ],
    example: {
      title: "Education Example: Reading Speed Test",
      description: "12 students' reading speed (words per minute): 245, 280, 290, 265, 275, 285, 255, 270, 295, 260, 285, 275. Historical data shows grade average is 270 WPM. Test if class reading speed differs from grade average.",
      scenario: "Conduct t-test to judge reading speed difference",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Identify statistics</strong></p>
        <ul>
          <li>Sample size: n = 12 (< 30)</li>
          <li>Sample mean: x̄ = 275</li>
          <li>Sample standard deviation: s = 15</li>
          <li>Population mean: μ = 270</li>
        </ul>

        <p><strong>Step 2: Select test method</strong></p>
        <p>n < 30, use t-test</p>

        <p><strong>Step 3: Set up hypotheses</strong></p>
        <ul>
          <li>H₀: μ = 270</li>
          <li>H₁: μ ≠ 270</li>
        </ul>

        <p><strong>Step 4: Calculate test statistic</strong></p>
        <p>SE = s / √n = 15 / √12 = 4.33</p>
        <p>t = (x̄ - μ) / SE = (275 - 270) / 4.33 = 1.15</p>

        <p><strong>Step 5: Determine P-value</strong></p>
        <p>df = n - 1 = 11, two-tailed t-test</p>
        <p>t = 1.15 corresponds to P-value ≈ 0.27</p>

        <p><strong>Step 6: Make decision</strong></p>
        <p>P-value (0.27) > α (0.05), fail to reject H₀</p>

        <p><strong>Conclusion:</strong></p>
        <p>At 5% significance level, class reading speed does not significantly differ from grade average.</p>
      `
    },
    industrialExample: {
      title: "Industrial Example: Resistance Testing",
      description: "Target resistance is 1000Ω. Sample of 15 resistors: 1005, 995, 1008, 1002, 998, 1010, 1003, 1000, 1007, 996, 1004, 1001, 999, 1006, 1009. Test if resistance meets specification.",
      scenario: "Conduct t-test to assess process compliance",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Identify statistics</strong></p>
        <ul>
          <li>Sample size: n = 15 (< 30)</li>
          <li>Sample mean: x̄ = 1002.67Ω</li>
          <li>Sample standard deviation: s ≈ 5.16Ω</li>
          <li>Target: μ = 1000Ω</li>
        </ul>

        <p><strong>Step 2: Select test method</strong></p>
        <p>n < 30, use t-test</p>

        <p><strong>Step 3: Set up hypotheses</strong></p>
        <ul>
          <li>H₀: μ = 1000</li>
          <li>H₁: μ ≠ 1000</li>
        </ul>

        <p><strong>Step 4: Calculate test statistic</strong></p>
        <p>SE = s / √n = 5.16 / √15 = 1.33</p>
        <p>t = (x̄ - μ) / SE = (1002.67 - 1000) / 1.33 = 2.01</p>

        <p><strong>Step 5: Determine P-value</strong></p>
        <p>df = 14, two-tailed t-test, t = 2.01 corresponds to P-value ≈ 0.062</p>

        <p><strong>Step 6: Make decision</strong></p>
        <p>P-value (0.062) > α (0.05), fail to reject H₀</p>

        <p><strong>Conclusion:</strong></p>
        <p>At 5% significance level, resistance basically meets specification. No adjustment needed.</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "Sample size 25, population standard deviation unknown. Which test to use?",
        options: [
          "Z-test",
          "t-test",
          "Chi-square test",
          "Either is fine"
        ],
        correct: 1,
        explanation: "Use t-test when population standard deviation is unknown, regardless of sample size approaching 30."
      },
      {
        type: "multiple-choice",
        question: "When n = 20 in t-test, what is degrees of freedom?",
        options: [
          "19",
          "20",
          "21",
          "Not applicable"
        ],
        correct: 0,
        explanation: "t-test degrees of freedom = n - 1 = 20 - 1 = 19"
      },
      {
        type: "calculation",
        question: "Sample mean 88, population mean 85, sample std dev 6, n=25. Calculate t value (round to 2 decimals)",
        correctAnswer: 2.5,
        tolerance: 0.1,
        explanation: "SE = 6 / √25 = 6 / 5 = 1.2, t = (88-85) / 1.2 = 3 / 1.2 = 2.5"
      },
      {
        type: "multiple-choice",
        question: "What characterizes t-distribution?",
        options: [
          "Identical to normal distribution",
          "Smaller degrees of freedom means thicker tails, more departure from normal",
          "Larger degrees of freedom means farther from normal",
          "Degrees of freedom don't affect shape"
        ],
        correct: 1,
        explanation: "t-distribution shape depends on df: smaller df means thicker tails; larger df approaches normal distribution."
      }
    ]
  },

  {
    id: 7,
    title: "Two Sample Tests",
    section: "INFERENTIAL STATISTICS",
    duration: "30 minutes",
    concepts: [
      {
        title: "Independent vs Paired Samples",
        content: `
          <h3>Independent Samples</h3>
          <p>Two samples come from different populations with no relationship between them.</p>
          <p><strong>Example:</strong> Comparing male and female student grades, comparing new vs old teaching methods</p>

          <h3>Paired Samples</h3>
          <p>Two samples come from same population measured at different times or conditions, with one-to-one correspondence.</p>
          <p><strong>Example:</strong> Student grades before/after training, temperature in location this year vs last year</p>

          <p><strong>Key Difference:</strong></p>
          <ul>
            <li>Independent: Data from different subjects</li>
            <li>Paired: Data from same subjects (like pre/post test on same student)</li>
          </ul>
        `
      },
      {
        title: "Independent Sample t-test",
        content: `
          <h3>Steps for Independent Sample t-test</h3>
          <p>Comparing means of two independent samples</p>

          <p><strong>Test statistic:</strong></p>
          <p>t = (x̄₁ - x̄₂) / √[s²ₚ(1/n₁ + 1/n₂)]</p>

          <p>Where s²ₚ is pooled sample variance (weighted average of two sample variances)</p>

          <p><strong>Degrees of freedom:</strong> df = n₁ + n₂ - 2</p>

          <p><strong>Assumptions:</strong></p>
          <ul>
            <li>Both samples from normal distributions (or large enough)</li>
            <li>Equal population variances (homogeneity of variance)</li>
            <li>Samples are independent</li>
          </ul>
        `
      },
      {
        title: "Paired Sample t-test",
        content: `
          <h3>Steps for Paired Sample t-test</h3>
          <p>Comparing paired data differences</p>

          <p><strong>Core idea:</strong> Calculate differences for each pair, then conduct single sample t-test on differences</p>

          <p><strong>Test statistic:</strong></p>
          <p>t = d̄ / (sₐ / √n)</p>

          <p>Where:</p>
          <ul>
            <li>d̄ = mean of differences</li>
            <li>sₐ = standard deviation of differences</li>
            <li>n = number of pairs</li>
          </ul>

          <p><strong>Degrees of freedom:</strong> df = n - 1</p>

          <p><strong>Advantage:</strong> More efficient than independent samples because it controls for individual differences</p>
        `
      },
      {
        title: "Application and Selection",
        content: `
          <h3>When to Use Which Test</h3>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border:1px solid #ddd;">
              <th style="border:1px solid #ddd; padding:8px;">Situation</th>
              <th style="border:1px solid #ddd; padding:8px;">Use Test</th>
              <th style="border:1px solid #ddd; padding:8px;">Example</th>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Compare two different groups</td>
              <td style="border:1px solid #ddd; padding:8px;">Independent t-test</td>
              <td style="border:1px solid #ddd; padding:8px;">Male vs female grades</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Compare same group before/after</td>
              <td style="border:1px solid #ddd; padding:8px;">Paired t-test</td>
              <td style="border:1px solid #ddd; padding:8px;">Student grades before/after training</td>
            </tr>
            <tr style="border:1px solid #ddd;">
              <td style="border:1px solid #ddd; padding:8px;">Compare 3+ groups</td>
              <td style="border:1px solid #ddd; padding:8px;">ANOVA (beyond this course)</td>
              <td style="border:1px solid #ddd; padding:8px;">Three class grades</td>
            </tr>
          </table>
        `
      }
    ],
    example: {
      title: "Education Example: Teaching Methods Comparison",
      description: "Compare two classes' math grades. Class A (30 students): mean 82, std dev 8. Class B (28 students): mean 79, std dev 7. Test if grades significantly differ.",
      scenario: "Conduct independent sample t-test",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Identify information</strong></p>
        <ul>
          <li>Class A: n₁ = 30, x̄₁ = 82, s₁ = 8</li>
          <li>Class B: n₂ = 28, x̄₂ = 79, s₂ = 7</li>
        </ul>

        <p><strong>Step 2: Set up hypotheses</strong></p>
        <ul>
          <li>H₀: μ₁ = μ₂ (same average grades)</li>
          <li>H₁: μ₁ ≠ μ₂ (different average grades)</li>
        </ul>

        <p><strong>Step 3: Calculate pooled variance</strong></p>
        <p>s²ₚ = [(n₁-1)s₁² + (n₂-1)s₂²] / (n₁+n₂-2)</p>
        <p>s²ₚ = [(29×64) + (27×49)] / 56 = [1856 + 1323] / 56 = 57.84</p>

        <p><strong>Step 4: Calculate standard error</strong></p>
        <p>SE = √[57.84(1/30 + 1/28)] = √[57.84 × 0.0720] = 2.05</p>

        <p><strong>Step 5: Calculate t value</strong></p>
        <p>t = (82 - 79) / 2.05 = 1.46</p>

        <p><strong>Step 6: Determine P-value</strong></p>
        <p>df = 30 + 28 - 2 = 56, two-tailed P-value ≈ 0.149</p>

        <p><strong>Step 7: Make decision</strong></p>
        <p>P-value (0.149) > α (0.05), fail to reject H₀</p>

        <p><strong>Conclusion:</strong></p>
        <p>At 5% significance level, the two classes' average grades do not significantly differ.</p>
      `
    },
    industrialExample: {
      title: "Industrial Example: New Process Evaluation",
      description: "12 products made with old and new processes, comparing pass rates. New-Old differences: 2.5, 3.2, 1.8, 2.8, 3.5, 2.1, 2.9, 3.1, 1.9, 2.7, 3.3, 2.4. Test if new process significantly improves pass rate.",
      scenario: "Conduct paired sample t-test",
      solution: `
        <h4>Solution Process</h4>
        <p><strong>Step 1: Calculate difference statistics</strong></p>
        <ul>
          <li>Number of pairs: n = 12</li>
          <li>Mean difference: d̄ = 2.695%</li>
          <li>Difference std dev: sₐ = 0.62%</li>
        </ul>

        <p><strong>Step 2: Set up hypotheses</strong></p>
        <ul>
          <li>H₀: d̄ = 0 (same effectiveness)</li>
          <li>H₁: d̄ > 0 (new process better)</li>
        </ul>

        <p><strong>Step 3: Calculate standard error</strong></p>
        <p>SE = sₐ / √n = 0.62 / √12 = 0.179</p>

        <p><strong>Step 4: Calculate t value</strong></p>
        <p>t = d̄ / SE = 2.695 / 0.179 = 15.06</p>

        <p><strong>Step 5: Determine P-value</strong></p>
        <p>df = 12 - 1 = 11, one-tailed P-value < 0.0001</p>

        <p><strong>Step 6: Make decision</strong></p>
        <p>P-value < 0.0001 < α (0.05), reject H₀</p>

        <p><strong>Conclusion:</strong></p>
        <p>At 5% significance level, new process significantly improves pass rate. Improvement effect is substantial.</p>
      `
    },
    verification: [
      {
        type: "multiple-choice",
        question: "Comparing same students' test scores before/after training. Which test?",
        options: [
          "Independent t-test",
          "Paired t-test",
          "Z-test",
          "Not applicable"
        ],
        correct: 1,
        explanation: "Pre/post measurement on same subjects is paired data, use paired t-test."
      },
      {
        type: "multiple-choice",
        question: "For independent t-test, degrees of freedom formula is?",
        options: [
          "df = n₁ + n₂",
          "df = n₁ + n₂ - 1",
          "df = n₁ + n₂ - 2",
          "df = (n₁ - 1) + (n₂ - 1)"
        ],
        correct: 2,
        explanation: "Independent sample t-test df = n₁ + n₂ - 2. (Note: option C and D are mathematically equivalent.)"
      },
      {
        type: "multiple-choice",
        question: "Paired t-test core idea is?",
        options: [
          "Compare all data points simultaneously",
          "Calculate differences, then conduct single sample test",
          "Compare only largest and smallest values",
          "Use Z-distribution instead of t"
        ],
        correct: 1,
        explanation: "Paired t-test calculates differences for each pair, then treats as single sample for t-testing."
      },
      {
        type: "multiple-choice",
        question: "Assumptions for independent t-test include?",
        options: [
          "Normal distributions or large samples, equal variances, independence",
          "Must use exact normal distributions",
          "Sample sizes must be equal",
          "No assumptions needed"
        ],
        correct: 0,
        explanation: "Independent t-test assumes normality (or large n), homogeneity of variance, and sample independence."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = courseData;
}

