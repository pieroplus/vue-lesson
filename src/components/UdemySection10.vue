<script setup lang="ts">
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';

const userInput = ref<string>('')
const userInput2 = ref<string | number>('hello');
const userInputNumber = ref<number | string>(0)
const message = ref<string>('')
const checked = ref<string>("not checked")
const fruits = ref<string[]>([]);
const gender = ref<string>('');
const selected = ref<string[]>([])
const emitFunc = (val: string): void => {
	userInput.value = val;
}
</script>
<template>
	<h1>v-model</h1>
	<CustomInput v-model="userInput2" @hello="emitFunc"/>
	<button @click="userInput2 = 'hello'">hello</button>
	<p>親コンポーネントuserInput2:{{ userInput2 }}</p>
	<h2>Text</h2>
	<input v-model.lazy.trim="userInput" type="text" />
	<p>{{ userInput }}</p>
	<input v-model.lazy.number="userInputNumber" type="text" />
	<p>{{ typeof userInputNumber }}</p>
	<h2>TextArea</h2>
	<textarea v-model="message"></textarea>
	<p style="white-space: pre;">{{ message }}</p>
	<h2>Checkbox</h2>
	<input id="checkbox" type="checkbox" v-model="checked" true-value="checked" false-value="not checked"/>
	{{ checked }}
	<p>Fruits</p>
	<input v-model="fruits" id="Apple" type="checkbox" value="Apple" />
	<label for="Apple">Apple</label>
	<input v-model="fruits" id="Banana" type="checkbox" value="Banana" />
	<label for="Banana">Banana</label>
	<input v-model="fruits" id="Grape" type="checkbox" value="Grape" />
	<label for="Grape">Grape</label>
	<p>choeces: {{ fruits }}</p>
	<h2>Radio</h2>
	<input v-model="gender" type="radio" id="male" value="male">
	<label for="male">male</label>
	<input v-model="gender" type="radio" id="female" value="femail">
	<label for="female">female</label>
	<P>{{ gender }}</P>
	<h2>Select</h2>
	<select v-model="selected" multiple>
		<option value="" disabled>Select one</option>
		<option value="A">A</option>
		<option value="B">B</option>
		<option value="C">C</option>
	</select>
	<p>{{ selected }}</p>
</template>