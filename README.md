# Subnet Calculator

## Overview

This is a simple **Subnet Calculator** web application that allows users to calculate subnet details based on a selected CIDR-Notation. The tool provides essential subnet information such as the subnet mask in dot-decimal notation, binary representation, and the number of available IP addresses.

## Features

- **Subnet Mask Calculation**: Dynamically calculates the subnet mask based on the selected CIDR value.
- **Available Addresses**: Displays the number of available IP addresses in the subnet, including network and broadcast addresses.
- **Dot-Decimal Notation**: Shows the subnet mask in the standard dot-decimal format (e.g., `255.255.255.0`).
- **Binary Representation**: Provides the subnet mask in binary format for better understanding.
- **Responsive Design**: The interface is designed to be user-friendly and responsive across different devices.

## How to Use

1. **Open the Application**: Launch the `index.html` file in your web browser.
2. **Adjust the Subnet Mask**: Use the slider to select the desired subnet mask (CIDR value ranging from 1 to 31).
3. **View Results**: The application will automatically update and display the following information:
   - Subnet Mask
   - Number of Available Addresses
   - Dot-Decimal Notation
   - Binary Representation

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling and layout of the user interface.
- **JavaScript**: Logic for calculating and updating subnet details.
- **Google Fonts**: Custom typography using the Lato and Outfit fonts.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deltaseconds/subnet-calculator.git
   ```
2. Navigate to the project directory:
   ```bash
   cd subnet-calculator
   ```
3. Open the `index.html` file in your preferred web browser.

## Credits

This project was created by [deltaseconds](https://github.com/deltaseconds).

## License

This project is open-source and available under the [MIT License](LICENSE).

---

Feel free to contribute, report issues, or suggest improvements!
