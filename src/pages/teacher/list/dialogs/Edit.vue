<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-form :model-value="formValid" @submit.prevent="saveChanges">
      <v-card>
      <v-card-title class="text-h5">Edit Teacher</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedTeacher.firstName" label="First Name" :rules="[name => !!name || 'First Name is required']"></v-text-field>
        <v-text-field v-model="editedTeacher.lastName" label="Last Name" :rules="[name => !!name || 'Last Name is required']"></v-text-field>
        <v-text-field v-model="editedTeacher.email" label="Email" :rules="[email => !!email || 'Email is required', 
                    email => /^\S+@\S+\.\S+$/.test(email) || 'Invalid email format'
                  ]"></v-text-field>
        <v-text-field v-model="editedTeacher.phone" label="Phone" :rules="[phone => (phone && /^(06|05|07)\d{8}$/.test(phone)) || 'Invalid phone number: Must be non-empty and contain only digits And More Then 9 digits']"></v-text-field>
        <v-text-field v-model="editedTeacher.status" label="Status" :rules="[age => (age && !isNaN(age) && age >= 18 && age <= 120) || 'Age must be a number between 18 and 120']"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" @click="saveChanges">Save</v-btn>
        <v-btn color="blue darken-1" @click="closeDialog">Cancel</v-btn>
      </v-card-actions>
    </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
export default {
  props: {
    teacher: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      dialog: false,
      editedTeacher: {},
      formValid : true,
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
      this.editedTeacher = { ...this.teacher };
    },
    saveChanges() {
      if(this.formValid) {
        this.$emit('save-changes', this.editedTeacher);
        this.dialog = false;
      }
    },
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>
