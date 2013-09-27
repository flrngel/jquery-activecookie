#jquery-activecookie#

activate selector when selector`s pointing cookie matches with string.

##Dependencies##

jQuery
jQuery Cookie(https://github.com/carhartl/jquery-cookie)

##Installation(minify)##

npm install -g grunt-cli or sudonpm install -g grunt-cli

git clone https://github.com/flrngel/jquery-activecookie

cd jquery-activecookie

grunt clean

grunt

##Usage##

<div class=".needDrugs" data-cookie="drugman" data-when="havemoney"></div>

$(".needDrugs").activecookie();



see more on example folder.

##Options##

cookieName: name of the cookie to comapre with.

class: class name to add when cookie`s value matches with attr.

attr: attribute name for cookie.

callback: callback function calling after activecookie.

##License##

This application is licensed under the MIT License.

See the [LICENSE file](https://github.com/flrngel/jquery-activecookie/blob/master/LICENSE)
