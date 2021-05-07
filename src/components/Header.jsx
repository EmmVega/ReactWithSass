import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { Link, useLocation } from 'react-router-dom';
import gravatar from '../utils/gravatar';
import {logoutRequest} from '../actions';
import PropTypes from 'prop-types';


const Header = props => {
    const { user } = props;
    const hasUser = Object.keys(user).length > 0; 
    const handleLogout = () => {
        props.logoutRequest({});
    }

    const headerClass = 
        (useLocation().pathname === '/register' ||
        useLocation().pathname === '/login' )
        ? 'greenHeader' : '';


    return (
        <header className={`header ${headerClass}`}>
            {console.log(headerClass)}
                <Link to="/">
                    <img className="header__img" src={logo} alt="Platzi Video"/>
                </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser?
                        <img src={gravatar(user.email)} alt={user.email} /> :
                        <img src={userIcon} alt="" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser?
                        <>
                            <li><a href="/">{user.name}</a></li> 
                            <li><Link to ="/login" onClick={handleLogout}>Cerrar Sesión</Link></li>
                        </> :
                        <>    <li><Link to ="/login">Iniciar Sesión</Link></li>
                        </>
                    }
                </ul>
            </div>
        </header>  
    );
}

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

Header.propTypes = {
    user: PropTypes.object,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);