import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchApplication from './components/SearchApplication';
import DeleteApplication from './components/DeleteApplication';
import JobApplication from './components/JobApplication';
import ViewAllApplications from './components/ViewAllApplications';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<JobApplication />} />
      <Route path="/view-applications" element={<ViewAllApplications />} />
      <Route path="/search-application" element={<SearchApplication />} />
      <Route path="/delete-application" element={<DeleteApplication />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
