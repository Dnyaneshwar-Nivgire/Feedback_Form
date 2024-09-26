import { Component } from '@angular/core';

@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.component.html',
  styleUrls: ['./student-feedback.component.css']
})
export class StudentFeedbackComponent {
  studentName: string = '';
  batchNumber: number | null = null;
  feedbackText: string = '';

  // Array to store submitted feedback
  submittedFeedback: { name: string; batch: number; feedback: string }[] = [];

  // Method to handle form submission
  onSubmit(feedbackForm: any): void {
    if (feedbackForm.valid) {
      // Add submitted feedback to the array
      this.submittedFeedback.push({
        name: this.studentName,
        batch: this.batchNumber!,
        feedback: this.feedbackText
      });

      // Reset the form fields after submission
      feedbackForm.resetForm();

      // Clear local fields
      this.studentName = '';
      this.batchNumber = null;
      this.feedbackText = '';
    }
  }
}
