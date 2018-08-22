import React , { Component } from 'react';

class Article extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <article className="article-container">
                <h1>New Role for developers : MERN</h1>
                <summary>M:MongoDb , E:ExpressJS , R: ReactJs, N:Nodejs</summary>
                <section className="about-article">

                </section>
                <main className="main-article">
                    <p>
                    This is the first in a series of blog posts examining the technologies that are driving the development 
                    of modern web and mobile applications, notably the MERN and MEAN stacks. The series will go on to step 
                    through tutorials to build all layers of an application.
                    </p>
                    <p>
                    Users increasingly demand a far richer experience from web sites – expecting the same level of performance 
                    and interactivity they get with native desktop 
                    and mobile apps. At the same time, there's pressure on developers to deliver new applications faster and 
                    continually roll-out enhancements, while ensuring that the application is highly available and can be 
                    scaled appropriately when needed. Fortunately, there's a (sometimes bewildering) set of enabling technologies 
                    that make all of this possible.
                    </p>
                </main>
            </article>
        )
    }
}

export default Article;