import ContactsView from './views/ContactsView.vue'
import ContactView from './views/ContactView.vue'
import ErrorNotFoundView from './views/ErrorNotFoundView.vue'

export const routes = [
  {
    path: '/',
    redirect: { name: 'contacts-list' },
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: ErrorNotFoundView,
  },
  {
    name: 'contacts-list',
    path: '/contacts',
    component: ContactsView,
  },
  {
    name: 'contact-detail',
    path: '/contacts/:contactId',
    component: ContactView,
  },
]
