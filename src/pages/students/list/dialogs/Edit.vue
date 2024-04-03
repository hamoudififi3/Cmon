  <template>
      <v-dialog v-model="dialog" max-width="500px">
        <v-form :model-value="formValid" @submit.prevent="saveChanges">
      <v-card>
        <v-card-title class="text-h5">Edit Student</v-card-title>
        <v-card-text>
          <v-text-field v-model="editedStudent.firstName" label="First Name" :rules="[name => !!name || 'First Name is required']"></v-text-field>
          <v-text-field v-model="editedStudent.lastName" label="Last Name" :rules="[name => !!name || 'Last Name is required']"></v-text-field>
          <v-text-field v-model="editedStudent.email" label="Email" :rules="[email => !!email || 'Email is required', 
                    email => /^\S+@\S+\.\S+$/.test(email) || 'Invalid email format'
                  ]"></v-text-field>
          <v-text-field v-model="editedStudent.phone" label="Phone" :rules="[phone => (phone && /^(06|05|07)\d{8}$/.test(phone)) || 'Invalid phone number: Must be non-empty and contain only digits And More Then 9 digits']"></v-text-field>
          <v-text-field v-model="editedStudent.age" label="Age" :rules="[age => (age && !isNaN(age) && age >= 18 && age <= 120) || 'Age must be a number between 18 and 120']"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" type="submit">Save</v-btn>
          <v-btn color="blue darken-1" @click="closeDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
      </v-dialog>
    </template>
    
    <script>
    export default {
      props: {
        student: {
          type: Object,
          required: true
        }
      },
      data() {
        return {
          dialog: false,
          editedStudent: {},
          formValid: true,

        };
      },

      methods: {
        openDialog() {
          this.dialog = true;
          this.editedStudent = { ...this.student};
        },
        saveChanges() {
          if(this.formValid) {
            this.$emit('save-changes', this.editedStudent);
          this.dialog = false;
          }
        },

        closeDialog() {
          this.dialog = false;
        },
      }
    };
    </script>
    