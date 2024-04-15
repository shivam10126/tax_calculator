Tax Calculator Test Cases
This repository contains test cases for a tax calculator application. The test cases cover various scenarios to ensure accurate tax calculations based on different income levels, ages, and deductions.

Test Cases
Test Case No.	Gross Annual Income	Extra Income	Deductions	Age Group	Expected Tax (in Lakhs)	Edge Case
1	4 Lakhs	2 Lakhs	1 Lakhs	< 40	0	No
2	6 Lakhs	2 Lakhs	0 Lakhs	≥ 40 but < 60	0	No
3	10 Lakhs	5 Lakhs	1 Lakhs	< 40	1.8	No
4	12 Lakhs	3 Lakhs	2 Lakhs	≥ 40 but < 60	2	No
5	20 Lakhs	2 Lakhs	4 Lakhs	≥ 60	1	No
6	8 Lakhs	0 Lakhs	0 Lakhs	< 40	0	Edge
7	8.5 Lakhs	1 Lakhs	0.5 Lakhs	≥ 40 but < 60	0.4	Edge
8	8.1 Lakhs	0 Lakhs	0.1 Lakhs	≥ 60	0	Edge
9	0 Lakhs	0 Lakhs	0 Lakhs	< 40	0	Edge
10	10 Lakhs	2 Lakhs	0 Lakhs	≥ 40 but < 60	1.6	Edge
Description
Gross Annual Income: Gross annual income before any deductions or taxes.
Extra Income: Additional income sources apart from the Gross Annual Income.
Deductions: Total amount eligible for deductions from the income.
Age Group: Age group of the individual for determining the tax rate.
Expected Tax: Expected tax amount calculated based on the provided inputs.
Edge Case: Indicates whether the test case is an edge case.
Edge Cases
Test Case No. 6: Overall income is exactly 8 Lakhs, Age < 40
Test Case No. 7: Overall income is slightly over 8 Lakhs, Age ≥ 40 but < 60
Test Case No. 8: Overall income is just over 8 Lakhs, Age ≥ 60
Test Case No. 9: Zero Income, Age < 40
Additional Cases
Zero Deductions, Age ≥ 40 but < 60
Gross Annual Income: 10 Lakhs
Extra Income: 2 Lakhs
Deductions: 0 Lakhs
Age: ≥ 40 but < 60
Expected Tax: 1.6 Lakhs
