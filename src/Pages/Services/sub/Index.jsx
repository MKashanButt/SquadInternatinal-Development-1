import React from 'react'
import Telemarketing from "./Telemarketing/Index"
import DesignDevelopment from "./DesignDevelopment/Index"

const Index = ({ page }) => {
    switch (page) {
        case 'telemarketing':
            return (
                <Telemarketing />
            )
        case 'design-and-development':
            return (
                <DesignDevelopment />
            )
        default:
            return (
                <></>
            )
    }
}

export default Index