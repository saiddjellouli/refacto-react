import React from 'react';
import DomainFilter from '../components/DomainFilter';
import { Link } from 'react-router-dom';

interface Props {
    domains: string[]
}

const UpdatedDomainPage: React.FC<Props> = ({ domains }) => {
    return (
        <div style={{ display: "inline-block", marginRight: '15%' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button style={{ backgroundColor: 'red' }}>Go to basic page</button>
            </Link>
            <DomainFilter />
        </div>
    );
};

export default UpdatedDomainPage;
