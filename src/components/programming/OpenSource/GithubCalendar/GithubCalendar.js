import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import React from 'react';


function GithubCalendar() {
    return (
        <GitHubCalendar username="DoubleCookies">
            <ReactTooltip delayShow={50} html/>
        </GitHubCalendar>
    );
}

export default GithubCalendar;