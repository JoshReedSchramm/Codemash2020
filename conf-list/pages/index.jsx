import fetch from 'isomorphic-unfetch';
import moment from 'moment';
import {Heading, Event} from '@joshreedschramm/jrs-codemash-lib';

const conferenceFeed = 'http://localhost:3000/api/conf';

const HomePage = ({confList = [], poweredBy = ''}) => {
    
    return (
        <div>

            <Heading level="2" as="h1">Front End Conference List 2020</Heading>
            
            <ol style={{textAlign: 'left'}}>
                {confList.map((conf, i) => (
                    <li key={i}>
                        <Event eventName={conf.title} url={conf.url} date={conf.date} />
                        <p>Where: {conf.location}</p>
                    </li>
                ))}
            </ol>

            <p>
                This list was created by a JSON Feed hosted at &nbsp;
                <a href={poweredBy}>{poweredBy}</a> 
            </p>

        </div>
    )
}

HomePage.getInitialProps = async () => {

    const res = await fetch(conferenceFeed);
    const data = await res.json();

    return {
        confList: data.conferences,
        poweredBy: data.source
    };
};

export default HomePage;