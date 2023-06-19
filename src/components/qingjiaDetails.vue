<template>
    <div class="wrapper">
      <div class="course-table">
        <a-table :columns="columns" :data-source="courseData" class="custom-table"></a-table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CourseTable',
    data() {
      return {
        columns: [
          {
            title: '时间',
            dataIndex: 'time',
            key: 'time'
          },
          {
            title: '星期一',
            dataIndex: 'monday',
            key: 'monday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          },
          {
            title: '星期二',
            dataIndex: 'tuesday',
            key: 'tuesday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          },
          {
            title: '星期三',
            dataIndex: 'tuesday',
            key: 'tuesday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          },
          {
            title: '星期四',
            dataIndex: 'tuesday',
            key: 'tuesday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          },
          {
            title: '星期五',
            dataIndex: 'tuesday',
            key: 'tuesday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          },
          {
            title: '星期六',
            dataIndex: 'tuesday',
            key: 'tuesday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          },
          {
            title: '星期日',
            dataIndex: 'tuesday',
            key: 'tuesday',
            customRender: (text) => {
              return <div class="course-cell">{text}</div>;
            }
          }
        ],
        courseData: [
          {
            time: '8:00 - 8:55',
            monday: 'English',
            tuesday: 'Math',
            // Add data for other weekdays as needed
            // ...
          },
          {
            time: '9:00 - 9:55',
            monday: 'Science',
            tuesday: 'History',
            // Add data for other weekdays as needed
            // ...
          },
          // Repeat for other time slots as needed
          // ...
          {
            time: '19:00 - 19:55',
            monday: 'Physical Education',
            tuesday: 'Music',
            // Add data for other weekdays as needed
            // ...
          }
        ]
      };
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .wrapper {
    width: 100%;
    height: 100%;
  }
  
  .course-table {
    width: 100%;
  }
  
  .course-cell {
    background-color: green;
    padding: 5px;
    border-radius: 4px;
    color: white;
    text-align: center;
  }
  </style>
  