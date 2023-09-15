import React from 'react';
import './App.css';
import BooksList from "../components/BooksList/BooksList";
import SearchGroup from "../components/SearchGroup/SearchGroup";
import {Route, Routes} from "react-router-dom";
import BookDetailPage from "../components/BookDetailPage/BookDetailPage";

const App = () => {

    return (
        <div className="app">
            <SearchGroup/>
                <Routes>
                    <Route path="/" element={<BooksList/>}/>
                    <Route path="/books/:bookId" element={<BookDetailPage/>}/>
                </Routes>
        </div>
    );
}

export default App;
