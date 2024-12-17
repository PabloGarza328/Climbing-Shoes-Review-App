import React from 'react';

function HomePage(){
    return (
        <>
        <section><h2>Web Dev Concepts</h2></section>
    <nav class="local">
        <a href="#webServers">Web Servers</a>
        <a href="#frontendDesign">Frontend Design</a>
        <a href="#optimization">Optimizing Images</a>
        <a href="#favicons">Favicons</a>
        <a href="#CSS">CSS</a>
        <a href="#Forms">Forms</a>
        <a href="#Express">Express</a>
        <a href="#JS">JavaScript</a>
       
    </nav>

 <article id="webServers">
    <h3>Web Servers</h3>
    <p>
        When a <strong>client</strong> sends a request to a web server with a
        <strong> URL </strong> path containing only <kbd>"/"</kbd>, most web servers will automatically map that request 
        to the<kbd> /index.html </kbd> path.  The <strong>index.html</strong> file is known as the <strong> designated homepage </strong> of the web application. 
        For example, the <strong> Apache </strong> web server we use as OSU students uses the default index.html name.
        There are other servers, such as <strong> Microsoft's .NET</strong> platform, in which default.html is considered as the homepage. 
        Lastly, there are some cases in which the server might define index.js or index.php as the homepage.
    </p>
    <p>
        If we open this website both locally and in the Apache server, and open the <strong>Network header request/response Inspector </strong> on both, we can find interesting similarities and differences. The first difference is that of the <strong> Request URL</strong>. In the local version of the site, we see the file path of index.html. In the web server version, we see <kbd> https://web.engr.oregonstate.edu/~garzap/</kbd>. This indicates that one site is located locally, while the other lives on a web server. Additionally, the web server version of the site contains significantly more information in both the <strong>Response Header </strong>and <strong>Request Header</strong> sections. For example, it contains <strong>accept-language</strong>, which is English, <strong> cache-control</strong>, and<strong> host</strong>, which is <kbd> web.engr.oregonstate.edu</kbd>. But not everything is different. Amongst the similarities between the two sites we can find the exact same <strong>HTTP Status Code </strong>of 200, indicating a successful request. Additionally, both <strong>Responses </strong>obtained from the index.html file contain the exact same <strong>HTML</strong> code, which is to be expected because we are viewing exact copies of the same .html file.
    </p>
    <p>
        When inspecting this site, there are 4 total requests. The landing page, plus 3 other resources. Amongst these 3 resources, there's one that is found (with its corresponding status code of <strong>200</strong>), and 2 that are not found (with their corresponding status code of <strong>404</strong>). The favicon.ico file is found because it's automatically included in the OSU server. The main.css and the main.js files are not found because said files are not in our server. An important detail to is that the reason our server looks for the .js and .css files in the first place is because they are referenced in the head of the HTML file. 
    </p>
    <p>
        A URL is composed of different elements. First we have the <strong>scheme</strong> which defines the protocol that the web client must use as it requests the resource. In the case of this website, the scheme is <strong>https</strong> which is the standard for most modern websites. Then comes the <strong>subdomain</strong> which is a sort of subdivision of the server. In this website, the subdomain is <kbd>web.engr.</kbd>
        Next comes the <strong>host domain</strong> which is matched to a specific <strong>IP address</strong> indicating the location of the server. In our case, that would be <kbd>oregonstate.edu</kbd>. Then comes the <strong>path</strong> which identifies the specific <strong>resource</strong> on the server. (A resource here means a piece of content or data). This website's path is <kbd>/~garzap/</kbd> which signals that we are currently in the homepage inside the <kbd>~garzap</kbd> directory. Finally, URLs could have an<strong> item</strong>. The item, otherwise known as <strong>anchor</strong>, <strong>fragment</strong>, or <strong>hash</strong> is preceded by a "#" and it points to a specific area in the page. This page's URL doesn't have an item. 
       
    </p>
</article>
<article id="frontendDesign">
    <h3>Frontend Design</h3>
    <p>
        <strong>Frontend Design</strong> has the objective of creating a positive experience for users. It's composed of several factors such as the<strong> visual design</strong> of the page, the <strong>graphic user-interface</strong> (GUI), the <strong>interactive experience</strong>, and the <strong>usability</strong>. The visual design encompasses the color scheme, font and typography, amongst other aspects. Usability refers to a combination of factors that determine the experience of the user with the product. When considering a usable website, it typically complies with what's known as the <strong>Five "E"s</strong> of usability. 
    </p>
    <dl>
        <dt><strong>Effective</strong> </dt>
        <dd>Effective at helping users achieve their objective(s).</dd>
        <dt><strong>Efficient</strong> </dt>
        <dd>Ensuring users achieve their objectives while going over the least number of steps</dd>
        <dt><strong> Easy to navigate</strong> </dt>
        <dd>Smooth and hassle-free experience for first-time as well as for returning users.</dd>
        <dt><strong>Error-free</strong></dt>
        <dd>Mitigating accessibility and availability issues.</dd>
        <dt><strong>Enjoyable</strong> </dt>
        <dd>Building a website that meets the needs of the intended audience.</dd>
    </dl>
    <p>
        <strong>Page Layout Tags</strong> are a key concept in HTML. These tags help break up the content of the page into smaller chunks so as to improve readability. Almost all pages have 6 key tags. The <strong>header</strong> is situated at the top of the page and is typically equal across all pages of a site. The <strong>nav</strong> tag is meant for sections containing links to either other pages in the same site, or external links. The <strong>main</strong> element holds the primary content of the site. The <strong>section </strong>tag is used to group content that shares a similar theme. The <strong>article</strong> element, which typically lives inside a section, denotes a specific topic. And lastly, the <strong>footer</strong> element, which typically lives below the main tag, holds contact information, legal information and links to important pages. 
    </p>
    <p>
        <strong>Anchors</strong> are used to navigate from one item to another. An anchor has a <strong>href</strong> attribute which indicate the link's destination. There are 3 main types of anchors:
    </p>
    <ol>
        <li><strong>External anchors</strong> link to an external website. These take in a URL as their href attribute. For example, <kbd>&lt;a href="https://oregonstate.edu/"&gt; OSU Website &lt;/a&gt;</kbd> </li>

        <li><strong>Internal anchors</strong> link to a specific item within the same page. These take in ID attributes as their href attribute.</li>

        <li><strong>Page-to-Page anchors</strong> link to other pages within the same website. It's best practice to use a <strong>relative URL</strong> in these cases. This means that the URL points to a location relative to the file we are currently visiting.</li>
    </ol>
</article>    
<article id="optimization">
    <h3>Optimizing Images</h3>
    <p>
        <strong>Optimized images</strong> comply with 6 specifications, all of which will be explained here. Images should have a <strong>Descriptive file name</strong> which concisely depict the content being displayed. This also helps improve <strong>search image optimization</strong>. Moreover, the image should have a <strong>small file size</strong> so as to increase load time. Images should also have an<strong> Exact dimension</strong> so that they fit the blocks of space that they are intended to fill. Another key specification is that images should have a <strong>reduced resolution</strong> so as to match the default standard of 71ppi. (Much higher resolutions are common now, so now it's required to upload different resolutions of each image). Furthermore, the <strong>Color Mode</strong> should be the appropriate one for each kind of image. PNGs, JPGs, SVGs and WebPs should have the <strong>RGB color mode</strong>, and conversely, GIF and some PNG files must be under the <strong>Indexed </strong>color mode. The final specification is that images need to have the <strong>Correct file format</strong>. Photos are usually JPG, graphics with true transparency are 24-bit PNG, and line-art images (such as logos and icons) are GIF or 8-bit PNG.  
    </p>   
</article>
<article id="favicons">
    <h3>Favicons</h3>
    <p>
        <strong>Favicons</strong> need to be placed in the root of the project on the web server. Consequently, browsers and devices identify these files, although sometimes browsers require <kbd>link</kbd> tags in the head of the webpage to help render the files. When prompted, the device or browsers will save and display the favicons accordingly. For example, when bookmarking a site, making a favorites list, or adding a website to a phone's home screen. Furthermore, favicons are also displayed in the tabs of web browsers. 
    </p>   
</article>
<article id="CSS">
    <h3>CSS</h3>
    <p>
        <strong>Cascading Stylesheets (CSS)</strong> are essential in defining how a website looks, improving readability, usability, and giving the site a specific look. Although HTML defines the basic structure of the site, it's CSS that truly brings the vision to life. In addition, CSS is key in bringing a website up to a brand's requirements.  
    </p> 
    <p>
        There are various ways of incorporating stylesheets into a website, each with their own unique advantages and disadvantages. The most preferred route is though an external CSS. This means that the HTML links to a separate CSS file. There are two methods for this, by linking a CSS file in the global <kbd>head</kbd> of a site, or by using<strong> @import</strong>. As for using CSS internally, there are 3 methods. It can be <strong>embedded </strong>within a <kbd>style</kbd> tag. It can be added <strong>inline</strong> within an element, or it can be incorporated with <strong>regular JavScript</strong> by manipulating the <strong>Document Object Model</strong>. Internal links are used when the intent is to apply style to a specific section or tag in the HTML. But it's typically advised to stick to external CSS links and implement <strong>classes</strong> and <strong>IDs</strong> whenever we wish to apply a style to a specific section. 
    </p>  

</article>
<article id="Forms">
    <h3>Forms</h3>
    <p>
        There are 6 major goals of accessible forms. There must be<strong> clear instructions</strong> above the form and in the labels so users know what they are being asked to input. Users must know <strong>why their data</strong> is being gathered and what the <strong>required fields</strong> are. The form should be accessible to users without a mouse. Thus, the first field must be set to <strong>autofocus</strong> and all forms should be able to be filled just by using the <strong>keyboard.</strong> Complex forms should include <strong>tab indexing</strong> so it is clear in which order the fields should be filled. Finally, the <strong>validation messages</strong> should be readable. This is important since the built-in HTML response is not user-friendly.
    </p> 
    <p>
        Forms are made up of a variety of tags. First of all, the <strong>form tag</strong> itself which encapsulates all the various <strong>input</strong> tags and the submit <strong>button</strong> tag. Input tags are grouped inside <strong>fieldset</strong> tags. These help organize the form's inputs into separate categories. Finally, each fieldset contains a <strong>legend</strong> tag that essentially defines a title for the fieldset.       
    </p>  
    <p>
        Usability is essential when dealing with forms. We want to be sure the user knows what to input and where. There are several recommendations for this. First, each group of labels and inputs should be visually clear and separated to improve readability. Inputs that require text from the user should have a placeholder that guides the user, hinting them as to the kind of input we are requesting from them. If we have mandatory fields, these should be marked accordingly either with an asterisk or with a contrasting color around the input (green is often used). Text-fields should also have proper dimensions so that user's input can fit. There are many other considerations that help improve a form's readability. All in service of improving the user's experience and reducing confusion.
    </p>
</article>
<article id="Express">
    <h3>Node, npm and Express</h3>
    <p>
        A great number of modern websites rely on these three technologies: <strong>Node</strong>, <strong>npm, </strong>and <strong>Express</strong>. Node is a cross-platform runtime environment for developing server-side applications. It essentially allows the use of JavaScript on the server side of a web app. Node.js also provides a plethora of packages which are installed and managed with the use of the <strong>Node package manager</strong> (npm). People have developed a number of frameworks for building web apps using Node.js. <strong>Express</strong> is a widely used framework that provides <strong>APIs</strong> for common web application tasks. Express greatly simplifies the process of posting, getting and deleting data.  
    </p>  
</article>
<article id="JS">
    <h3>JavaScript</h3>
    <p> 
        The main <strong>data types </strong> that values can have in <strong>JavaScript</strong> are either a number, a boolean value, a string, a symbol, the special values undefined and null, and an <strong>object</strong>. A JavaScript object is essentially a set of <strong>name-value pairs</strong> which can be modified in different ways. Even though a JavaScript object is not compatible with other programming languages, it can be transformed into a standard format that is programming language independent. This format is called <strong>JSON</strong>. JSON allows the transfer of a JS object into another programming language by transforming the object into a string with a specific format. This string can then be interpreted by other languages. In JS, an <strong>array</strong> is essentially an object in which the names are strings starting with '0'. Objects are an essential aspect of JavaScript programming, and when we talk about <strong>Object Oriented Programming</strong> we mean a style of programming that relies on objects as the fundamental building blocks. Another key aspect of programming in JavaScript is <strong>functions</strong> which in turn allow for <string>functional programming</string>. Functions tend to have a set of inputs and outputs and focus on covering one task. This modularity eases the process of debugging and often leads to a more readable and less redundant codebase.
        As for <strong>conditionals</strong> and<strong> loops</strong>, JS works fairly similarly to other languages like <strong>python</strong>. In the case of conditionals, the syntax is made up of <strong>if-then-else</strong> statements. And loops are divided into <strong>while loops</strong> and <strong>for loops</strong>. For loops are then subdivided into 3 categories, depending on what the loop will iterate over.
    </p>  
</article>
    </>
)
}
export default HomePage;