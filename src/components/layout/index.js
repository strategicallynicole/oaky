import React,  { useState, useEffect } from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'scss/abstract.scss'


import logo from './logo.svg';
import './App.css';
import LoadingScreen from './loading'

class Layout extends React.Component {
    componentDidUpdate() {
        window.location.reload(false)
    }

    render() {
        const { children } = this.props
        const [loading, setLoading] = useState(true)

        useEffect(() => {
          setTimeout(() => setLoading(false), 600)
        }, [])

        return (

            {loading = false ? (
                <section id="main">
                <Navbar scroll={this.props.isHome ? true : false} sections={this.props.sections} />

                    {children}

                <Footer />
            </section>                    ) : (
                      <LoadingScreen />
                    )}

        )
    }
}

export default Layout
