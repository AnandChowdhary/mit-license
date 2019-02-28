# Twente License [![Twente License](https://twente.me/shield.svg)](https://twente.me) ![Work in progress](https://img.shields.io/badge/work%20in-progress-green.svg)

Twente License is a fork of the [MIT license](https://opensource.org/licenses/MIT). It aims to combine openly sharing knowledge (i.e., a permissive, open license) with added values like respectivng individual privacy by committing to transparency.

## 💡 Rationale

The MIT license is the [most popular](https://github.blog/2015-03-09-open-source-license-usage-on-github-com/) open-source license out there. It's used by millions of projects and helps the community by providing open access to code, so that developers can build on top of the hard work done by others.

However, in light of recent events where companies are financially motivated to disregard individual privacy, developers should choose wisely who can use their intellectual property or codebases.

Twente License is free and permissive—just like the MIT license—but it adds a clause where the end product in which Twente licensed code can be used has to be compliant with certain guidelines, primarily respecting individual privacy by telling users how their information is shared.

## 🐎 Why Twente?

The European Union (EU) has been in the center of enforcing privacy on the web with regulations such as the GDPR. While the United States Senate was busy asking [how Facebook is free](https://www.youtube.com/watch?v=n2H8wx1aBiQ), the EU has imposed millions of euros worth of fines on companies for lack of transparency and disregarding privacy.

Twente License is named after [University of Twente](https://utwente.nl/en/?utm_source=twente-license&utm_medium=github&utm_campaign=README&utm_term=anand-chowdhary), where it originated, and the high-tech entrepreneurial region of [Twente](https://www.visittwente.com/?utm_source=twente-license&utm_medium=github&utm_campaign=README&utm_term=anand-chowdhary) in the eastern part of the Netherlands.

## 📝 License Text

Copyright &copy; Your Name (email@example.com)

<details>
<summary><em>MIT license intro</em></summary>
<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>
</details>  

Any copy, modification, merge, distribution, or sublicensing of this Software or Software based on this Software (the "Derivative")  must comply with the following:

The "Data Controller Statement" is a notice listing each Data Controller ("Data Controller" means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data). The above copyright notice, the Data Controller Statement, and this permission notice shall be included in all copies or substantial portions of the Software and the Derivative.

<details>
<summary><em>MIT license waiver of warranty and more info link</em></summary>
<p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>
<p>For more information, please refer to <a href="https://twente.me">https://twente.me</a>.
</details>

## 🔗 Twente.me

[![Build status](https://api.travis-ci.org/AnandChowdhary/twente-license.svg?branch=master)](https://travis-ci.org/AnandChowdhary/twente-license/)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/twente-license/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/twente-license?branch=master)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/twente-license.svg)
![Dependencies](https://img.shields.io/david/dev/AnandChowdhary/twente-license.svg)

[Twente.me](https://twente.me) is an easy way to share your work under Twente License using a hosted permalink. You can claim your username, like [twente.me/anand](https://twente.me/anand) and link your badge to your own generated Twente License page.

1. Create a pull request with a YAML file with your info (name, email, links etc., [here's a sample](https://github.com/AnandChowdhary/twente-license/blob/master/people/sample.yml)) in the `./people` folder.
2. Add the Twente License badge (code samples below) to your repositories.
3. Link the badge to your personal license page, i.e., [twente.me/sample](https://twente.me/sample).

[![Twente License](https://twente.me/shield.svg)](https://twente.me/sample)

```md
[![Twente License](https://twente.me/shield.svg)](https://twente.me/sample)
```

```html
<a href="https://twente.me/sample"><img alt="Twente License" src="https://twente.me/shield.svg"></a>
```

## 🤔 FAQ

#### Can I use Twente Licensed code in a commercial, proprietary project?

Absolutely. The license does not force you to release your code under an open-source license, it only asks you to respect certain values, like individual privacy.

#### Can I just switch from MIT to Twente License without changing my codebase?

My probably, yes. Since open-source packages don't usually collect any personal information, you can just replace the MIT license text with the Twente License text in your `LICENSE.md` file. However, if you are planning on releasing a product (such as an app, a website, etc.) with code under the Twente License, make sure you comply with the rules before switching.

#### Do I need to comply with the GDPR to use Twente License?

The GDPR is much broader in requirements and includes hiring a Data Protection Officer, having an option to export and delete data, etc. Twente License only asks you for transparency, but complying with the GDPR means you automatically qualify for Twente License as well.

#### Is Twente License part of the SPDX License List and OSI-approved?

Not yet, but it has been submitted to both SPDX ([#11](https://github.com/AnandChowdhary/twente-license/issues/11)) and OSI ([#10](https://github.com/AnandChowdhary/twente-license/issues/10)), pending reviews.

## ✅ Todo

- [x] [Submit to SPDX](https://github.com/spdx/license-list-XML/blob/master/CONTRIBUTING.md)
- [x] [Submit to OSI](https://opensource.org/approval)
- [x] Work on transparency instead of forcing privacy
- [ ] Generate your own Twente License with custom conditions, choose values, etc.
