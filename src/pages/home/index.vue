<template>
  <div class="Home">
    <div class="wrapper">
      <MHeader></MHeader>
      <div class="content">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
          <div class="box-item">
            <FormItem prop="user">
              <Input type="text" v-model="formInline.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </div>
          <div class="box-item">
            <FormItem prop="password">
              <Input type="password" v-model="formInline.password" placeholder="Password">
              <Icon type="ios-locked-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
          </div>
          <div class="box-item">
            <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
            </FormItem>
          </div>
        </Form>
      </div>
      <MFooter></MFooter>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import MHeader from "../../components/header/header.vue";
import MFooter from "../../components/footer/footer.vue";

export default {
  components: {
    MHeader,
    MFooter
  },
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$http.get("/user?ID=12345").then(res => {
            console.log(res);
          });
          // this.$Message.success('Success!')
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/variable.styl';

.Home
  position fixed;
  left 0;
  top 0;
  width 100%;
  height 100%;
.wrapper
  width 100%;
  height 100%;
  display flex;
  justify-content space-between;
  flex-direction column;
  background url('./screen.png') no-repeat;
  .box-item
    text-align center;
    .ivu-form-item
      width 240px;
      .ivu-btn
        width 240px;
</style>
