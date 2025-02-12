<template>
  <section class="bg-blue-900 lg:pt-24">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h1
        class="mb-4 text-4xl tracking-tight font-semibold text-center text-blue-50 dark:text-white"
      >
        Contact
      </h1>
      <p
        class="font-sansTwo font-light text-center text-blue-50 dark:text-gray-400 sm:text-xl"
      >
        Vous recherchez quelqu'un de sérieux pour votre projet ? Contactez-moi!
      </p>
      <p
        class="font-sansTwo m-2 font-light text-center text-blue-50 dark:text-gray-400 sm:text-xl"
      >
        Je suis disponible en semaine toute la journée.
      </p>
      <p
        class="font-sansTwo font-light text-center text-blue-50 dark:text-gray-400 sm:text-xl"
      >
        Remplissez le formulaire ci-dessous pour m'envoyer un mail directement. Je répond
        très rapidement!
      </p>

      <form
        method="POST"
        ref="form"
        @submit.prevent="sendEmail"
        class="flex flex-col content-evenly gap-4"
      >
        <div>
          <label
            for="name"
            class="block mb-2 text-lg font-medium text-blue-50 dark:text-gray-300"
            >Nom*</label
          >
          <input
            type="text"
            id="nom"
            v-model="user_name"
            name="user_name"
            class="shadow-sm bg-blue-50 border border-gray-300 text-blue-950 font-sansTwo placeholder-blue-950 placeholder-opacity-30 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="entrez votre nom"
            required
          />
        </div>
        <div>
          <label
            for="firstname"
            class="block mb-2 text-lg font-medium text-blue-50 dark:text-gray-300"
            >Prénom</label
          >
          <input
            type="text"
            id="prenom"
            v-model="user_name"
            name="user_firstname"
            class="shadow-sm bg-blue-50 border border-gray-300 text-blue-950 font-sansTwo placeholder-blue-950 placeholder-opacity-30 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="entrez votre prénom"
          />
        </div>
        <div>
          <label
            for="company"
            class="block mb-2 text-lg font-medium text-blue-50 dark:text-gray-300"
            >Nom de votre entreprise</label
          >
          <input
            type="text"
            id="company"
            v-model="user_company"
            name="user_company"
            class="shadow-sm bg-blue-50 border border-gray-300 text-blue-950 font-sansTwo placeholder-blue-950 placeholder-opacity-30 text-sm rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="entrez le nom de votre entreprise"
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 text-lg font-medium text-blue-50 placeholder-blue-900 placeholder-opacity-30 dark:text-gray-300"
            >Votre email*</label
          >
          <input
            type="email"
            id="email"
            name="user_email"
            class="shadow-sm bg-blue-50 border text-sm border-gray-300 text-blue-950 font-sansTwo placeholder-blue-950 placeholder-opacity-30 rounded-md focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="alexis@carlier.fr"
            required
          />
        </div>

        <div>
          <label
            for="subject"
            class="block mb-2 text-lg font-medium text-blue-50 dark:text-gray-300"
            >Sujet de votre message*</label
          >
          <select
            name="subject"
            id="subject-select"
            class="block p-3 w-full text-sm text-blue-950 font-sans placeholder-blue-950 placeholder-opacity-30 bg-blue-50 rounded-md border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            required
          >
            <option value="">-- Choissisez dans la liste --</option>
            <option value="web">Développement Web</option>
            <option value="graphism">Graphisme</option>
            <option value="dp">Digital Painting</option>
            <option value="astronomie">Astronomie</option>
          </select>
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-lg font-medium text-blue-50 dark:text-gray-400"
            >Votre message*</label
          >
          <textarea
            id="message"
            name="message"
            rows="6"
            class="block p-2.5 w-full resize-none text-sm text-blue-950 font-sansTwo placeholder-blue-950 placeholder-opacity-30 bg-blue-50 rounded-md shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Entrez votre message..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          class="py-1 px-4 text-lg font-semibold text-center bg-blue-500 text-blue-50 hover:bg-blue-300 hover:text-blue-950 rounded-md sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Envoyer
        </button>
        <div class="flex items-center">
          <input type="checkbox" name="validate" id="" class="" required />
          <p class="px-1 font-sansTwo font-thin text-blue-50 focus:outline-none">
            * cocher la case pour prouver que vous êtes un être humain
          </p>
        </div>
      </form>
    </div>
    <router-view />
  </section>
  
</template>
<script>
import emailjs from "@emailjs/browser";

export default {
  methods: {
    sendEmail() {
      emailjs
        .sendForm(
          "service_0769",
          "template_uc13p59",
          this.$refs.form,
          "8fkrdVnaSZucxaSVN"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            window.alert("Votre mail à bien été envoyé!");
          },
          (error) => {
            console.log("FAILED...", error.text);
            window.alert(
              "Une erreur s'est produite lors de l'envoie du message. Veuillez recommencer l'opération."
            );
          }
        );
    },
  },
};
</script>
