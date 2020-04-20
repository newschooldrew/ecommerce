import React from 'react'
import {ErrorImageOverlay,ErrorImageContainer, ErrorImageText} from './error-boundary.styles'

class ErrorBoundary extends React.Component{
    
    constructor (){
        super()
        this.state = {
            hasErrored:false
        }
    }

    static getDerivedStateFromError(err){
     return {hasErrored: true}   
    }

    componentDidCatch(err,info){
        console.log(err)
    }

    render (){
        if (this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl='https://i.imgur.com/qIufhof.png' />
                    <ErrorImageText>Sorry this page is under construction</ErrorImageText>
                </ErrorImageOverlay>
            )
        } 
            return this.props.children;
    }
}

export default ErrorBoundary