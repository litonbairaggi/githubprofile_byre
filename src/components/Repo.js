import React from 'react';

const Repo = ({ data, repositories }) => {

    return (
        <div>
            <div className="row">
                <div className="col-md-12">

                <div className="row">
                    
                    <div className="col-md-12">
                    <hr/>
                    {repositories.map(repo => (
                        <div className="ui relaxed divided list" key={repo.name}>
                            <div className="item">
                                <i className="large github middle aligned icon"></i>
                                <div className="content">                                    
                                    <div className="listitems">
                                    <span><a href={repo.html_url} className="header" target="_blank" rel="noreferrer">
                                        {repo.name}</a></span><br></br>
                                        <span className="label label-default">{repo.watchers} Watchers</span>
                                        <span className="label label-primary">{repo.forks} Forks</span>
                                        
                                    </div>
                                </div>
                            </div>
                            <hr/>
                        </div>
                    ))}

                    </div>
                </div>


                </div>
            </div>
        </div>
    );
};

export default Repo;