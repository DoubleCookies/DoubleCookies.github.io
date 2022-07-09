import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import React from 'react';


function GithubCalendar() {
    return (
        <div className="block-medium">
            <GitHubCalendar username="DoubleCookies">
                <ReactTooltip delayShow={50} html/>
            </GitHubCalendar>
        </div>
    );
}

export default GithubCalendar;