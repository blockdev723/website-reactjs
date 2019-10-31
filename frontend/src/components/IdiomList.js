import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit';
const { SearchBar, ClearSearchButton } = Search;

const idioms = [
  {
    id: 1,
    idiom: 'The best of both worlds'
  },
  {
    id: 2,
    idiom: 'Mobile'
  },
  {
    id: 3,
    idiom: 'Book'
  },
  {
    id: 4,
    idiom: 'TV'
  },
  {
    id: 5,
    idiom: 'Mobile'
  },
  {
    id: 6,
    idiom: 'Book'
  },
  {
    id: 7,
    idiom: 'TV'
  },
  {
    id: 8,
    idiom: 'Mobile'
  },
  {
    id: 9,
    idiom: 'Book'
  },
  {
    id: 10,
    idiom: 'TV'
  },
  {
    id: 11,
    idiom: 'Mobile'
  },
  {
    id: 12,
    idiom: 'Book'
  },
  {
    id: 13,
    idiom: 'TV'
  },
  {
    id: 14,
    idiom: 'Mobile'
  },
  {
    id: 15,
    idiom: 'Book'
  }
];

const columns = [{
  dataField: 'idiom',
  text: 'Idioms help us enrich our language'
}];

const expandRow = {
  onlyOneExpanding: true,
  renderer: row => (
    <div>
      {/* <p>{ `This Expand row is belong to rowKey ${row.id}` }</p> */}
      <p>means you can enjoy two different opportunities at the same time.</p>
      <p>“By working part-time and looking after her kids two days a week she managed to get the best of both worlds.”</p>
    </div>
  )
};

const IdiomList = () => {
    return (
        <div>
            <ToolkitProvider
                keyField="id"
                data={ idioms }
                columns={ columns }
                search
                >
                {
                    props => (
                    <div>                                                
                        <SearchBar { ...props.searchProps } />
                        <ClearSearchButton { ...props.searchProps } />                        
                        <BootstrapTable bootstrap4 
                            keyField='id' 
                            data={ idioms } 
                            columns={ columns } 
                            { ...props.baseProps }
                            expandRow={ expandRow } 
                            pagination={ paginationFactory() } 
                        />
                    </div>
                    )
                }
                </ToolkitProvider>
        </div>
    );
};

export default IdiomList;