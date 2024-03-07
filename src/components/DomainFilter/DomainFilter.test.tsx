/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import DomainFilter from './DomainFilter.component';
import RefactoFilter from '../RefactoDomainFilter';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={['do']} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })
  })
});

const domains = ['US-AA-XYZ', 'UK-BB-XYZ', 'FR-CC-XYZ'];

describe('RefactoFilter', () => {
  it('renders select inputs for countries, classifications, and subClassifications', () => {
    const onUpdateFilterOptions = jest.fn();
    const { getByLabelText } = render(<RefactoFilter domains={domains} onUpdateFilterOptions={onUpdateFilterOptions} />);

    // eslint-disable-next-line testing-library/prefer-screen-queries
    const countriesSelect = getByLabelText('countries');
    const classificationsSelect = getByLabelText('classifications');
    const subClassificationsSelect = getByLabelText('subClassifications');

    expect(countriesSelect).toBeInTheDocument();
    expect(classificationsSelect).toBeInTheDocument();
    expect(subClassificationsSelect).toBeInTheDocument();
  });

  it('calls onUpdateFilterOptions with correct filter options', () => {
    const onUpdateFilterOptions = jest.fn();
    render(<RefactoFilter domains={domains} onUpdateFilterOptions={onUpdateFilterOptions} />);

    expect(onUpdateFilterOptions).toHaveBeenCalledWith({
      countries: ['US', 'UK', 'FR'],
      classifications: ['AA', 'BB', 'CC'],
      subClassifications: ['XYZ'],
    });
  });
});

