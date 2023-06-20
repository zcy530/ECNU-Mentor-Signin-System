<template>
    <div class="wrapper">
        <h2>
            {{ TextDecoder || '无内容' }}
        </h2>
        <div class="course-table">
            <a-table :columns="columns" :data-source="courseData" class="custom-table">
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
                    key: 'weekday',
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
                    key: 'weekday',
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
                    key: 'weekday',
                    customRender: (text,record) => {
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
                    key: 'weekday',
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
                    key: 'weekday',
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
        get(`/office-service/student/info?studentId=${this.instructorId}`).then((res) => {
            TextDecoder = res.data
        })
        // get(`/account-service/account/studentId/exception?studentId=${this.$route.query.studentId}&term=${this.$route.query.term}`).then((res) => {
        //     res.data
        // this.courseData = res.data
        //     console.log("🚀  res.data:", res.data)
        // })
        get(`/account-service/account/studentId/exception?studentId=10205101485&term=2023年春季学期`).then((res) => {
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
</style>
  