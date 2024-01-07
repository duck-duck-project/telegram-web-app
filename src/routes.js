import ContactsView from './views/ContactsView.vue'
import ContactView from './views/ContactView.vue'
import ErrorNotFoundView from './views/ErrorNotFoundView.vue'

export const routes = [
  { 
    name: 'not-found', 
    path: '/:pathMatch(.*)*', 
    component: ErrorNotFoundView,
   },
  {
    name: 'contacts-list',
    path: '/users/:userId/contacts',
    component: ContactsView,
  },
  {
    name: 'contact-detail',
    path: '/contacts/:contactId',
    component: ContactView,
  },
]
node_modules/
dist/
npm-debug.log
yarn-error.log
.vscode
