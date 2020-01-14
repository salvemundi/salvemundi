import 'reflect-metadata';
<<<<<<< HEAD
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ScopeSeeder } from './seed/scope.seed';
import swaggerOptions from './swagger/document';
import { createConnection } from 'typeorm';

async function bootstrap() {
  await createConnection(require('./typeormConfig'));
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.enableCors({
    origin: ['http://localhost:8080', 'https://localhost:8080', 'https://salvemundi.nl', 'http://salvemundi.nl', 'http://beta.salvemundi.nl', 'https://beta.salvemundi.nl'],
    credentials: true,
  });

  await app.get(ScopeSeeder).seed();

  const document = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup('api', app, document);

  await app.listen(+process.env.SERVER_PORT);
}

bootstrap();
=======
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import BootstrapVue from 'bootstrap-vue';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies';
import Vuex from 'vuex';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Toasted);
Vue.use(BootstrapVue);
Vue.use(VueI18n);
Vue.use(VueCookies);

const i18n = new VueI18n({
  locale: 'nl',
  fallbackLocale: 'en',
});

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
>>>>>>> repo-b/master
