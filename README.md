# Tax Calculator Test Cases

This repository contains test cases for a tax calculator application. The test cases cover various scenarios to ensure accurate tax calculations based on different income levels, ages, and deductions.

## Test Cases

| Test Case No. | Gross Annual Income | Extra Income | Deductions | Age Group     | Expected Tax (in Lakhs) | Edge Case |
|---------------|---------------------|--------------|------------|----------------|-------------------------|-----------|
| 1             | 4 Lakhs             | 2 Lakhs      | 1 Lakhs    | < 40           | 0                       | No        |
| 2             | 6 Lakhs             | 2 Lakhs      | 0 Lakhs    | ≥ 40 but < 60  | 0                       | No        |
| 3             | 10 Lakhs            | 5 Lakhs      | 1 Lakhs    | < 40           | 1.8                     | No        |
| 4             | 12 Lakhs            | 3 Lakhs      | 2 Lakhs    | ≥ 40 but < 60  | 2                       | No        |
| 5             | 20 Lakhs            | 2 Lakhs      | 4 Lakhs    | ≥ 60           | 1                       | No        |
| 6             | 8 Lakhs             | 0 Lakhs      | 0 Lakhs    | < 40           | 0                       | Edge      |
| 7             | 8.5 Lakhs           | 1 Lakhs      | 0.5 Lakhs  | ≥ 40 but < 60  | 0.4                     | Edge      |
| 8             | 8.1 Lakhs           | 0 Lakhs      | 0.1 Lakhs  | ≥ 60           | 0                       | Edge      |
| 9             | 0 Lakhs             | 0 Lakhs      | 0 Lakhs    | < 40           | 0                       | Edge      |
| 10            | 10 Lakhs            | 2 Lakhs      | 0 Lakhs    | ≥ 40 but < 60  | 1.6                     | Edge      |

## Description

- **Gross Annual Income**: Gross annual income before any deductions or taxes.
- **Extra Income**: Additional income sources apart from the Gross Annual Income.
- **Deductions**: Total amount eligible for deductions from the income.
- **Age Group**: Age group of the individual for determining the tax rate.
- **Expected Tax**: Expected tax amount calculated based on the provided inputs.
- **Edge Case**: Indicates whether the test case is an edge case.

### Edge Cases

1. Test Case No. 6: Overall income is exactly 8 Lakhs, Age < 40
2. Test Case No. 7: Overall income is slightly over 8 Lakhs, Age ≥ 40 but < 60
3. Test Case No. 8: Overall income is just over 8 Lakhs, Age ≥ 60
4. Test Case No. 9: Zero Income, Age < 40

## Additional Cases

- **Zero Deductions, Age ≥ 40 but < 60**
  - Gross Annual Income: 10 Lakhs
  - Extra Income: 2 Lakhs
  - Deductions: 0 Lakhs
  - Age: ≥ 40 but < 60
  - Expected Tax: 1.6 Lakhs

## screen shots

### test case 1
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/5bc88b1d-fb02-467b-a5fe-8082f253f4aa)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/954cb72b-ba47-438a-9dcc-c68ec26ef435)

### test case 2
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/b3daa1f5-3d66-4cbc-8578-1eafed77ec05)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/da950ca9-91b1-484e-9f04-a4a9f6d66a81)

### test case 3
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/53835f5a-d6af-4841-82cb-60afc938ea4b)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/da5e53b0-c173-488d-b94d-c5b86ba1f5cc)

### test case 4
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/e74010f5-b431-4fab-b14a-37fc37c6e41c)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/1b998216-45a2-4992-8360-5d902653ab41)

### test case 5
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/3299ea2f-7722-419e-ad33-53f7f16c8d5d)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/2fb4ee35-460e-4b34-8fb0-cd85e790b26c)

### test case 6
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/ed7b8fa4-5322-46ca-9b82-b4d66caefbf4)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/87ff22ba-5371-4495-a345-77124df90a99)

### test case 7
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/9fdd1748-2a22-45e5-acdc-8dcc639dc99a)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/df6a5dee-f47e-40b2-a70a-61b110e04f3f)

### test case 8
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/9c81f3b0-f28c-4090-b826-f3f7fb3cdc1b)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/f10fdd12-5814-4ebd-9c07-d24c57374d9f)

### test case 9
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/ce286a98-9f42-436f-9e1d-c44efa0aed78)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/7a014e80-6d27-4133-8e81-d28d9a2ed38c)

### test case 10
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/1a8c2cb8-2eb7-43d0-a75b-2bac36b6b4c2)
![image](https://github.com/shivam10126/tax_calculator/assets/114808047/251d0de6-fe49-478c-b265-3702014c5627)
