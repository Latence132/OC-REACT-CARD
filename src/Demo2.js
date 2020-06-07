import React from 'react'

export function Demo2({ title }) {
    return <h1>{title}</h1>
}

export function WrapComponent(component) {
    return (
        <div>
            <component title="Bonjour !" />
        </div>
    )
} 