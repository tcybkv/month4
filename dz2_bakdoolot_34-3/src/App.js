import React from "react";
import Title from "./components/title/Title";
import About from "./components/about/About";

const App = () => {
    const title = ({title: 'title', subtitle: 'titleSubtitle'})
    const about = ({title: 'aboutTitle', body: 'aboutBody', link: 'https://t.me/tcybkv'})
    return (
        <div>
            <Title title={title.title} subtitle={title.subtitle} />
            <About title={about.title} body={about.body} link={about.link}/>
        </div>
    )
};

export default App;