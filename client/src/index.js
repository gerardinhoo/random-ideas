import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal'
import './css/style.css';
import IdeaForm from './components/ideaForm';
import IdeaList from './components/IdeaList';

const modal = new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();

const ideaList = new IdeaList;
ideaList.render();