<template>
    <div class="wrapper">
        <table>
            <tr>
                <th>学号</th>
                <th>组别</th>
                <th>姓名</th>
                <th>院系</th>
                <th>班级</th>
                <th>专业</th>
                <th>入学年份</th>
            </tr>
            <tr>
                <td>{{ TextDecoder.studentId }}</td>
                <td>{{ TextDecoder.groupId }}</td>
                <td>{{ TextDecoder.stuname }}</td>
                <td>{{ TextDecoder.department }}</td>
                <td>{{ TextDecoder.classes }}</td>
                <td>{{ TextDecoder.major }}</td>
                <td>{{ TextDecoder.year }}</td>
            </tr>
        </table>
        <div class="course-table">
            <a-table :columns="columns" :data-source="courseData" row-key="studentId" class="custom-table">
                <span slot="time_action" slot-scope="text, record">
                    <div>{{ record.startTime }}</div>
                    <div>{{ record.endTime }}</div>
                </span>
            </a-table>
        </div>
    </div>
</template>
  
<script>
import { get } from '../utils/request';
import { getLocalStorage } from '@/utils/Obj'

export default {
    name: 'CourseTable',
    data() {
        return {
            TextDecoder: '',
            columns: [
                {
                    title: '时间',
                    dataIndex: 'time_action',
                    align: 'center',
                    width: 200,
                    scopedSlots: { customRender: 'time_action' }
                },
                {
                    title: '星期一',
                    dataIndex: 'weekday',
                    width: 200,
                    key: 'weekday1',
                    customRender: (text, record) => {
                        if (text === 'Monday') {
                            return <div class="course-cell"><div>{record.name}</div><div><span>迟到次数:</span>{record.late}次</div><div><span>请假次数:</span>{record.leave}次</div><div><span>缺勤次数:</span>{record.absent}次</div></div>;
                        } else {
                            return ''
                        }
                    }
                },
                {
                    title: '星期二',
                    dataIndex: 'weekday',
                    width: 200,
                    key: 'weekday2',
                    customRender: (text, record) => {
                        if (text === 'Tuesday') {
                            return <div class="course-cell"><div>{record.name}</div><div><span>迟到次数:</span>{record.late}次</div><div><span>请假次数:</span>{record.leave}次</div><div><span>缺勤次数:</span>{record.absent}次</div></div>;
                        } else {
                            return ''
                        }
                    }
                },
                {
                    title: '星期三',
                    dataIndex: 'weekday',
                    width: 200,
                    key: 'weekday3',
                    customRender: (text, record) => {
                        if (text === 'Wednesday') {
                            return <div class="course-cell"><div>{record.name}</div><div><span>迟到次数:</span>{record.late}次</div><div><span>请假次数:</span>{record.leave}次</div><div><span>缺勤次数:</span>{record.absent}次</div></div>;
                        } else {
                            return ''
                        }
                    }
                },
                {
                    title: '星期四',
                    dataIndex: 'weekday',
                    width: 200,
                    key: 'weekday4',
                    customRender: (text, record) => {
                        if (text === 'Thursday') {
                            return <div class="course-cell"><div>{record.name}</div><div><span>迟到次数:</span>{record.late}次</div><div><span>请假次数:</span>{record.leave}次</div><div><span>缺勤次数:</span>{record.absent}次</div></div>;
                        } else {
                            return ''
                        }
                    }
                },
                {
                    title: '星期五',
                    dataIndex: 'weekday',
                    width: 200,
                    key: 'weekday5',
                    customRender: (text, record) => {
                        if (text === 'Friday') {
                            return <div class="course-cell"><div>{record.name}</div><div><span>迟到次数:</span>{record.late}次</div><div><span>请假次数:</span>{record.leave}次</div><div><span>缺勤次数:</span>{record.absent}次</div></div>;
                        } else {
                            return ''
                        }
                    }
                },
            ],
            courseData: [

            ],
            instructorId: ''
        };
    },
    mounted() {
        this.instructorId = getLocalStorage('instructorId') || '5101603'
        get(`/office-service/student/info?studentId=${this.$route.query.studentId}`).then((res) => {
            this.TextDecoder = res.data
        })
        // get(`/account-service/account/studentId/exception?studentId=${this.$route.query.studentId}&term=${this.$route.query.term}`).then((res) => {
        //     res.data
        // this.courseData = res.data
        //     console.log("🚀  res.data:", res.data)
        // })
        get(`/account-service/account/studentId/exception?studentId=${this.$route.query.studentId}&term=${this.$route.query.term}`).then((res) => {
            this.courseData = res.data
            console.log("🚀  res.data:", res.data)
        })
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

body {
    background-color: #f7f7f7;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}

table {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    background-color: #ccc;
    border-collapse: collapse;
    box-shadow: 0 2px 4px rgba(146, 125, 221, 0.1);
}

th,
td {
    padding: 10px;
    text-align: center;
}

th {
    background-color: #f2f2f2;
    color: rgb(68, 66, 66);
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

</style>
  