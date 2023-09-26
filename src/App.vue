<template>
  <HelloWorld msg="Alsodev - test task 2"/>

  <main>
    <!--  TASK 1  -->
    <div>
      <p class="mb-4">
        1. Написать функцию которая: учитывает массив несортированных чисел и определяет являются ли числа в массиве
        последовательными, например :
      </p>

      <div>
        <input type="text" v-model="firstTaskModel" v-maska data-maska="########################################">&nbsp;
        {{ arrayIsSequential(firstTaskModel.split('').map((el) => +el)) }}
      </div>

      <pre v-highlightjs>
        <code class="javascript">
    const arrayIsSequential = (array = []) => {
      const arr = [...array].sort((a, b) => a - b)
      
      for (let i = 0; i &lt; array.length - 1; i++) {
        if (arr[i] !== arr[i + 1] - 1) {
          return false
        }
      }
      
      return true
    }
        </code>
      </pre>
    </div>

    <!--  TASK 2  -->
    <div>
      <p class="mb-4">
        2. Необходимо реализовать функцию, которая принимает массив в качестве аргумента и возвращает новый массив,
        содержащий только уникальные элементы. Новый массив должен быть отсортирован по возрастанию.
      </p>

      <div>
        <input type="text" v-model="secondTaskModel" v-maska data-maska="########################################">&nbsp;
        {{ arrayUniqueElements(secondTaskModel.split('').map((el) => +el)) }}
      </div>

      <pre v-highlightjs>
      <code class="javascript">
    const arrayUniqueElements = (array = []) => {
      return Array.from(new Set(array))
        .sort((a, b) => a - b)
    }
        </code>
      </pre>
    </div>

    <!--  TASK 3  -->
    <div>
      <p class="mb-4">
        3. Написать функцию которая принимает в качестве аргумента массив чисел и возвращает новый массив с количеством
        повторений первоначального массива {число: кол-во повторений}
      </p>

      <div>
        <input type="text" v-model="thirdTaskModel" v-maska data-maska="########################################">&nbsp;
        <b>{{ arrayGetRepeats(thirdTaskModel.split('').map((el) => +el)) }}</b>
      </div>

      <pre v-highlightjs>
      <code class="javascript">
    const arrayGetRepeats = (array = []) => {
      const repeats = array.reduce((acc, el) => {
        acc[el] ? acc[el]++ : acc[el] = 1
        return acc
      }, {})
      
      return Object.entries(repeats)
        .map(([key, value]) => ({ [key]: value }));
    }
        </code>
      </pre>
    </div>
  </main>
</template>

<script setup>
import { useFunctions } from "../composables/useFunctions"
import { ref } from "vue"
import { vMaska } from "maska"
import HelloWorld from './components/HelloWorld.vue'

const {
  arrayIsSequential,
  arrayUniqueElements,
  arrayGetRepeats
} = useFunctions()

const firstTaskModel = ref('1432')
const secondTaskModel = ref('1435569232')
const thirdTaskModel = ref('1435569232')
</script>
