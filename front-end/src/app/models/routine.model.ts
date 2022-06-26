export class Routine {
  room_number: number;
  hour8: any;
  hour9: any;
  hour10: any;
  hour11: any;
  hour14: any;
  hour15: any;
  hour16: any;
  hour17: any;
  hour18: any;
  hour19: any;

  hour8_course: string;
  hour9_course: string;
  hour10_course: string;
  hour11_course: string;
  hour14_course: string;
  hour15_course: string;
  hour16_course: string;
  hour17_course: string;
  hour18_course: string;
  hour19_course: string;

  hour8_semister: string;
  hour9_semister: string;
  hour10_semister: string;
  hour11_semister: string;
  hour14_semister: string;
  hour15_semister: string;
  hour16_semister: string;
  hour17_semister: string;
  hour18_semister: string;
  hour19_semister: string;

  hour8_teacher_name: string;
  hour9_teacher_name: string;
  hour10_teacher_name: string;
  hour11_teacher_name: string;
  hour14_teacher_name: string;
  hour15_teacher_name: string;
  hour16_teacher_name: string;
  hour17_teacher_name: string;
  hour18_teacher_name: string;
  hour19_teacher_name: string;


  constructor(options: any = {}) {
  
      this.room_number = options.room_number || null;
      this.hour8 = options.hour8 || "";
      this.hour9 = options.hour9 || "";
      this.hour10 = options.hour10 || "";
      this.hour11 = options.hour11 || "";
      this.hour14 = options.hour14 || "";
      this.hour15 = options.hour15 || "";
      this.hour16 = options.hour16 || "";
      this.hour17 = options.hour17 || "";
      this.hour18 = options.hour18 || "";
      this.hour19 = options.hour19 || ""; 


      this.hour8_course = options.hour8_course || "";
      this.hour9_course = options.hour9_course || "";
      this.hour10_course = options.hour10_course || "";
      this.hour11_course = options.hour11_course || "";
      this.hour14_course = options.hour14_course || "";
      this.hour15_course = options.hour15_course || "";
      this.hour16_course = options.hour16_course || "";
      this.hour17_course = options.hour17_course || "";
      this.hour18_course = options.hour18_course || "";
      this.hour19_course = options.hour19_course || ""; 

      this.hour8_semister = options.hour8_semister || "";
      this.hour9_semister = options.hour9_semister || "";
      this.hour10_semister = options.hour10_semister || "";
      this.hour11_semister = options.hour11_semister || "";
      this.hour14_semister = options.hour14_semister || "";
      this.hour15_semister = options.hour15_semister || "";
      this.hour16_semister = options.hour16_semister || "";
      this.hour17_semister = options.hour17_semister || "";
      this.hour18_semister = options.hour18_semister || "";
      this.hour19_semister = options.hour19_semister || ""; 

      this.hour8_teacher_name = options.hour8_teacher_name || "";
      this.hour9_teacher_name = options.hour9_teacher_name || "";
      this.hour10_teacher_name = options.hour10_teacher_name || "";
      this.hour11_teacher_name = options.hour11_teacher_name || "";
      this.hour14_teacher_name = options.hour14_teacher_name || "";
      this.hour15_teacher_name = options.hour15_teacher_name || "";
      this.hour16_teacher_name = options.hour16_teacher_name || "";
      this.hour17_teacher_name = options.hour17_teacher_name || "";
      this.hour18_teacher_name = options.hour18_teacher_name || "";
      this.hour19_teacher_name = options.hour19_teacher_name || ""; 




  }
}
