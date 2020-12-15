import { VuexModule } from "vuex-class-modules";

if (VuexModule == undefined) {
  throw new Error("Could not import VuexModule");
}
