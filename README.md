Business Card Parser
====================


## Development

If you are interested in contributing the project here are some steps to help you get going

First follow the instructions bellow to install the development dependencies for your specific environment:

## Quick start for Unix / Linux systems

### Dependency Installation
1. Install [NodeJS](https://nodejs.org/en/download/) (any version is fine)
3. Install [Git](https://git-scm.com/downloads)

### Initial project setup
1. Clone the project: `git clone https://github.com/jonterrylee/business_card_parser.git`
2. Enter the project's root directory
3. Ensure you have the correct version of NodeJS installed
4. Install global packages (may need root/admin rights): `npm install -g bower grunt-cli`
5. Install project node dependencies: `npm install`
6. Install project bower dependencies: `bower install`

### Running the project
1. Run the project `grunt serve`

### Live Demo!
- **[Launch Demo Site](https://jonterrylee.000webhostapp.com/#!/)**


### Interface Specification

ContactInfo
- String getName() : returns the full name of the individual (eg. John Smith, Susan Malick)
- String getPhoneNumber() : returns the phone number formatted as a sequence of digits
- String getEmailAddress() : returns the email address

BusinessCardParser
- ContactInfo getContactInfo(String document)


### Assumptions and Troubleshooting

  - All regular expressions are tested with current data set.  Should test with wider range of valid and invalid tests
  - Better validation for phone numbers supporting extensions and international numbers.
  - Better way to parse name.  Currently going with just the email address as the best hint.  Should add in additional ways to locate name if name not found in email.
  - Validation is not needed for example
  