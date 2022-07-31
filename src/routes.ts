import { Router } from 'express';

export const router = Router();

import { CreateCategories }     from './controllers/CreateCategories';
import { DeleteCategories }     from './controllers/DeleteCategories';
import { ListCategories }       from './controllers/ListCategories';
import { ListCategoriesParams } from './controllers/ListCategoriesParams';
import { UpdateCategories }     from './controllers/UpdateCategories';

import { ListVideos }           from './controllers/ListVideos';
import { ListVideosParams }     from './controllers/ListVideosParams';
import { UpdateVideos }         from './controllers/UpdateVideos';
import { CreateVideos }         from './controllers/CreateVideos';
import { DeleteVideos }         from './controllers/DeleteVideos';

import { CreateUser }           from './controllers/CreateUser';
import { AuthenticateUser }     from './controllers/AuthenticateUser';

import { ensureAuthenticated }  from './middlewares/ensureAuthenticated';
import { ensureAdmin }          from './middlewares/ensureAdmin';
import { ListUserParams }       from './controllers/ListUserParams';

router.get('/categories',        ensureAuthenticated, new ListCategories().handle);
router.get('/categories/:id',    ensureAuthenticated, new ListCategoriesParams().handle);
router.post('/categories',       ensureAuthenticated, ensureAdmin, new CreateCategories().handle);
router.put('/categories/:id',    ensureAuthenticated, ensureAdmin, new UpdateCategories().handle);
router.delete('/categories/:id', ensureAuthenticated, ensureAdmin, new DeleteCategories().handle);

router.get('/videos',            ensureAuthenticated, new ListVideos().handle);
router.get('/videos/:id',        ensureAuthenticated, new ListVideosParams().handle);
router.post('/videos',           ensureAuthenticated, ensureAdmin, new CreateVideos().handle);
router.put('/videos/:id',        ensureAuthenticated, ensureAdmin, new UpdateVideos().handle);
router.delete('/videos/:id',     ensureAuthenticated, ensureAdmin, new DeleteVideos().handle);

router.get('/user/:id',          new ListUserParams().handle);
router.post('/user',             new CreateUser().handle);
router.post('/login',            new AuthenticateUser().handle);