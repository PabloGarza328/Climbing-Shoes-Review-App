import React from 'react';

function HomePage(){
    return (
        <>
            <h2>Home</h2>
            <article>
                <h3>Career goals</h3>
                <p>My career goals are to one day become a senior software engineer who motivates others to do their best work. I would like to manage projects from their inception, making important architecture decisions such as what technologies should be used and how they  must be implemented. I recognize I still got many years ahead of failing and learning to get to that point. But i find the journey of discovery rather exciting.</p>
            </article>

            <article>
            <h3>Technologies Used in this Website</h3>
            <dl class="homeList">
                <dt>HTML</dt>                    
                    <dd class="homeDescription">HTML stands for HyperText Markup Language. It is the foundational layer of this and many sites. It is essentially the skeleton of a webpage, providing the basic building blocks.</dd>
                 <dt>CSS</dt>                    
                 <dd class="homeDescription">CSS stands for Cascading Style Sheets. CSS helps define the look of the website. Allows us to add color, background images, fonts, and define the allocation of elements. Without CSS styling the site would look very plain and generic.</dd>

                <dt>MongoDb</dt>                    
                <dd class="homeDescription">MongoDB is a no SQL database management system. It stores the data in a format very similar to that of JSON. The "shoes" page uses MongoDB to keep track of the shoe reviews uploaded by the community.</dd>

                <dt>Dom changes</dt>                    
                <dd class="homeDescription">The site showcases DOM changes such as in the "Order" page, where one can update the quantity of each item.</dd>

                 <dt>Express</dt>                    
                 <dd class="homeDescription">Express greatly simplifies the process of doing CRUD operations on data and managing HTTP requests and responses.</dd>

                 <dt>Node</dt>                    
                 <dd class="homeDescription">Node enables the use of JavaScript on the server side of the web app. It is an environment for developing server-side applications.</dd>

                 <dt>React</dt>                    
                 <dd class="homeDescription">React is a framework that greatly simplifies the process of using JavaScript to manipulate the DOM. React breaks down the user interface into reusable components. It is also a fantastic tool when building single page applications. </dd>
                 </dl>        
            </article>


            
            
        </>
    )
}
export default HomePage;