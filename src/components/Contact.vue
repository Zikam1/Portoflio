<script setup lang="ts"></script>
<template>
    <div id="contact"
      class="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div class="flex flex-col lg:h-screen p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div class="pb-8">
          <p class="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p class="py-6">Submit the form below to get in touch with BG</p>
        </div>

        <div class=" flex justify-center items-center">
          <form
            action="https://getform.io/f/e0c17fd9-a3da-4829-abab-95361b1f4ee3"
            method="POST"
            @submit.prevent=""
            class=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              class="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              class="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              aria-required
              required
            ></textarea>
            <button class="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
</template>