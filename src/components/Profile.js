import React, { useState } from 'react';
import Repo from './Repo';
import './Profile.css'

const Profile = () => {
    const [data, setData] = useState({});
    const [username, setUsername] = useState("");
    const [repositories, setRepositories] = useState([]);

    const onChangeHandler = e => {
        setUsername(e.target.value);
    }
    const summitHandler = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileJson = await profile.json();
        // console.log(profileJson);

        const repositories = await fetch(profileJson.repos_url);
        const repoJson = await repositories.json();
        // console.log(repoJson);

        if (profileJson) {
            setData(profileJson);
            setRepositories(repoJson);
        }
    }
    return (
        <div className="">
            <div className="ui search">
                <div className="ui icon input">
                    <input className="form-control" placeholder="search username here..." type="text" value={username} onChange={onChangeHandler} />
                </div>
                <button className="ui linkedin button" type="submit" onClick={summitHandler}>
                    <i className="search icon"></i>
                </button>
            </div> 
            <br/>  

                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={data.avatar_url} className="thumbnail" alt="" />
                        </div>

                        <div className="col-md-6">
                                <div className="col-md-12 text-center">
                                    <span className="label label-success">{data.public_repos} Public Repos</span>
                                    <span className="label label-primary">{data.public_gists} Public Gist</span>
                                    <span className="label label-default">{data.followers} Followers</span>
                                    <span className="label label-info">{data.following} Following</span>
                                </div>
                            <hr />
                            <ul className="list-group">
                                <li className="list-group-item"><strong>Name: {data.name}</strong></li>
                                <li className="list-group-item"><strong>Username: {data.login}</strong></li>
                                <li className="list-group-item"><strong>Location: {data.location}</strong></li>
                                <li className="list-group-item"><strong>Email: {data.email}</strong></li>
                                <li className="list-group-item"><strong>Bio: {data.bio}</strong></li>
                            </ul>
                            <a href={data.html_url} target="_blank" className="btn btn-primary" rel="noreferrer" >View Profile</a>
                        </div>
                    </div>
                    <hr/>
                    <h2 className="panel-title">Repositories</h2>
                    <Repo data={data} repositories={repositories} />
                </div>
        </div>
    );
};

export default Profile;