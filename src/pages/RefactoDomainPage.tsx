// NewPageWithRefactoFilter.tsx
import React from 'react';
import RefactoFilter from '../components/DomainFilter/RefactoDomainFilter';

const NewPageWithRefactoFilter: React.FC = () => {
    // Example domains data
    const domains = ['US-AA-XYZ', 'UK-BB-XYZ', 'FR-CC-XYZ'];

    // Callback to handle filter options update
    const handleFilterOptionsUpdate = (filterOptions: any) => {
        console.log('Filter options updated:', filterOptions);
    };

    return (
        <div>
            <h2>New Page with RefactoFilter</h2>
            <RefactoFilter domains={domains} onUpdateFilterOptions={handleFilterOptionsUpdate} />
        </div>
    );
}

export default NewPageWithRefactoFilter;
