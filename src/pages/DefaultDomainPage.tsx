import React from 'react';
import DomainFilter from '../components/DomainFilter';
import { Link } from 'react-router-dom';

interface Props {
    domains: string[]
}

const DefaultDomainPage: React.FC<Props> = ({ domains }) => {
    return (
        <div style={{ display: "inline-block" }}>
            <Link to="/updated" style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: 'green' }}>Go to updated page</button>
            </Link>
            <DomainFilter />
        </div>
    );
};

export default DefaultDomainPage;
