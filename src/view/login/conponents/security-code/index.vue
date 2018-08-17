<template>
		<div class="security-code-wrap">
		  <label :for="`code-${uuid}`">
			<ul :class="`${theme}-container security-code-container`">
			  <li class="field-wrap" v-for="(item, index) in length" :key="index">
				<i class="char-field">{{value[index] || placeholder}}</i>
			  </li>
			</ul>
		  </label>
		  <input ref="input" class="input-code" @keyup="handleInput($event)" v-model="value"
				 :id="`code-${uuid}`" :name="`code-${uuid}`" type="tel" :maxlength="length"
				 autocorrect="off" autocomplete="off" autocapitalize="off">
		</div>
	  </template>
	  
	  <script>
		export default {
		  name: 'SecurityCode',
		  // component properties
		  props: {
			length: {
			  type: Number,
			  default: 4
			},
			placeholder: {
			  type: String,
			  default: ''
			},
			theme: {
			  type: String,
			  default: 'block'
			}
		  },
		  // variables
		  data () {
			return {
			  value: ''
			}
		  },
		  computed: {
			uuid () {
			  return Math.random().toString(36).substring(3, 8)
			}
		  },
		  methods: {
			hideKeyboard () {
			  // 输入完成隐藏键盘
			  document.activeElement.blur() // ios隐藏键盘
			  this.$refs.input.blur() // android隐藏键盘
			},
			handleSubmit () {
			  this.$emit('input', this.value)
			},
			handleInput (e) {
			  if (e.target.value.length >= this.length) {
				this.hideKeyboard()
			  }
			  this.handleSubmit()
			}
		  }
		}
	  </script>
	  
	  <style scoped lang="less">
		.security-code-wrap {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		}
		.security-code-container {
		  margin: 0;
		  padding: 0;
		  display: flex;
		  .field-wrap {
			list-style: none;
			display: block;
			height:50px;
			width: 40px;
			line-height: 50px;
			font-size: 16px;
			text-align:center;
			.char-field {
			  font-style: normal;
			  color:#fff;
			}
		  }
		}
		.block-container {
		  justify-content: center;
		  .field-wrap {
			/* background-color: # */
			margin: 2px;
			color: #fff;
		  }
		}
		.line-container {
		  position: relative;
		  /* background-color: #fff; */
		  &:after {
			box-sizing: border-box;
			content: "";
			width: 200%;
			height: 200%;
			transform: scale(.5);
			position: absolute;
			top: 0;
			left: 0;
			transform-origin: 0 0;
			border-radius: 4px;
		  }
		  .field-wrap {
			flex: 1;
			position: relative;
			border:1px solid #d9d9d9;
			margin-right: 10px;
		  }
		}
		.input-code {
		  position: absolute;
		  left: -9999px;
		  top: -9999px;
		}
	  </style>