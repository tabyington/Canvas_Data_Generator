import React from "react";


export default () => (
    <div class="offcanvas offcanvas-end" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="templateGuide" aria-labelledby="templateGuideLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="templateGuideLabel">Template Guide</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                <p class="fs-6">
                By default, random data will be generated all data for loading into canvas and templates are not required. Some values are stored during normal data generation to avoid new data clashing with old data in canvas. Using a template circumvents this process.
                When you need a specific format or string in your canvas data, follow the guide below to create a template for your data.
                </p>
                <ul>
                    <li>A template is the sum of all fixed values and generators</li>
                    <li>All values existing outside '{ }' brackets will be treated as a fixed value in your template</li>
                    <li>"Values inside &lbrace; &rbrace; brackets a single generator"</li>
                    <li>"Limited dictionary based random values are available from faker via these variables:"
                        <ul>
                            <li>"&lbrace;firstName&rbrace; - a person's first name"</li>
                            <li>"&lbrace;lastName&rbrace;' - a person's last name"</li>
                            <li>"..."</li>
                        </ul>
                    </li>
                    <li>"A string of random lower case alpha characters a-z can be added using the a:# generator where # is replaced with the number of characters in the string. When needing only a single character, no :# value is required. EX: &lbrace;a:4&rbrace; generates a 4 character lower case letter string"</li>
                    <li>"A string of random upper case alpha characters A-Z can be added using the A:# generator where # is replaced with the number of characters in the string. When needing only a single character, no :# value is required. EX: &lbrace;A:9&rbrace; generates a 9 character upper case letter string"</li>
                    <li>"A string of random upper and lower case alpha characters A-Z, a-z can be added using the Aa:# generator where # is replaced with the number of characters in the string. When needing only a single character, no :# value is required. EX: &lbrace;Aa:5&rbrace; generates a 5 character mixed case letter string"</li>
                    <li>"A string of random numeric values 0-9 using the n:# generator where # is replaced with the number of characters in the string. When needing only a single character, no :# value is required. EX: &lbrace;n:7&rbrace; generates a 7 digit numeric string"</li>
                    <li>"A string of alpha-numeric values can be added using the an:#, An:#, Aan:# generators following the rules for alpha and numeric values listed above. EX: &lbrace;Aan:20&rbrace; generates a 2 character string of mixed case letters and numeric values"</li>
                    <li>"Currently, special characters are best included as fixed values between one or more generators. EX: &lbrace;n:5&rbrace;-&lbrace;Aa:16&rbrace;"</li>
                    <li>"In any generator that a fixed # value described in this guide, a range value may be used instead using the #-# format. These values are inclusive. EX: &lbrace;Aan:1-50&rbrace; generates a string of between one character and 50 characters following the Aan variable rules above"</li>
                    <li>"Leading values can be included in a string to create a fixed length string for variable length generated values by including :t to the end of the template generator. Default values can be overriden with an additional :value argument after the :t"
                        <ul>
                            <li>"For a:#-#:t, this would generate "a"s for any un-generated values, left to right. Ex: &lbrace;a:2-3:t:0&rbrace; would override the leading a with 0s"</li>
                            <li>"For A:#-#:t, this would generate "A"s for any un-generated values, left to right. EX: &lbrace;A:3-4:t:0&rbrace; would override the leading A with 0s"</li>
                            <li>"For Aa:#-#:t, this would generate "a"s for any un-generated values, left to right. Ex: &lbrace;Aa:4-5:t:0&rbrace; would override the leading a with 0s"</li>
                            <li>"For n:#-#:t, this would generate "0"s for any ug-generated values, left to right. EX: &lbrace;n:5-6:t:a&rbrace; would override the leading 0 with as"</li>
                            <li>"For an:#-#:t, An:#-#:t, Aan:#-#:t, this would generate "0"s for any un-generated values, left to right. Ex: &lbrace;An:6-7:t:$&rbrace; would override the leading 0 with $"</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
);