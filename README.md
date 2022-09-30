# Password Generator

## Description
- The computer will randomly generate a strong password that meets certain criteria that provide greater security

## Acceptance Criteria
- When I click the button to generate a password, then I am presented with a series of prompts for password criteria
- When prompted for password criteria, then I select which criteria to include in the password
- When prompted for the length of the password, then I choose a length of at least 8 characters and no more than 128 characters
- When asked for character types to include in the password, then I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
- When I answer each prompt, then my input should be validated and at least one character type should be selected
- When all prompts are answered, then a password is generated that matches the selected criteria
- When the password is generated, then the password is either displayed in an alert or written to the page

## Pseudocode
- Step 1: Create prompts that meet the password criteria
    a. Password length: >=8 and <=128
    b. Character: lowercase, uppercase, numeric, and/or special characters
- Step 2: Validate prompt after my answer and input character type >=1
- Step 3: Generate a password that meets the criteria
- Step 4: Display the password -- alert or on the page

