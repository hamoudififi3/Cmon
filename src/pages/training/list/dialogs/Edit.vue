<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title class="text-h5">Edit Train</v-card-title>
      <v-card-text>
        <v-text-field v-model="editedTrain.Name" label="Name" :rules="[name => !!name || 'Name is required']"></v-text-field>
        <v-select v-model="editedTrain.teacher" :items="teachers.map(teacher => teacher.Name)" label="Select Teacher"></v-select>
        <v-text-field v-model="editedTrain.numberOfStudents" label="Number of Students" type="number"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="blue darken-1" @click="saveChanges">Save</v-btn>
        <v-btn color="blue darken-1" @click="closeDialog">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    train: {
      type: Object,
      required: true
    },
    teachers: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      dialog: false,
      editedTrain: {}
    };
  },
  methods: {
    openDialog() {  
      this.dialog = true;
      this.editedTrain = { ...this.train };
    },
    saveChanges() {
      this.$emit('save-changes', this.editedTrain);
      this.dialog = false;
    },
    closeDialog() {
      this.dialog = false;
    }
  }
};
</script>
