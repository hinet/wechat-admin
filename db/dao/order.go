package dao

import (
	"fmt"
	"os"
	"sync/atomic"
	"time"

	"github.com/WeixinCloud/wxcloudrun-wxcomponent/comm/log"
	"github.com/WeixinCloud/wxcloudrun-wxcomponent/db"
	"github.com/WeixinCloud/wxcloudrun-wxcomponent/db/model"
)

const orderTableName = "order"

var num int64

// CreateOrder 创建订单
func CreateOrder(name string, license string, fullname string, wechat string, phone string, totalFee string) error {
	cli := db.Get()
	nowTime := time.Now()
	var orderNo = Generate(time.Now())
	newUser := model.Order{OrderNo: orderNo, Name: name, License: license, CreatedAt: nowTime, UpdatedAt: nowTime}
	log.Debug(newUser)
	if err := cli.Table(orderTableName).Create(&newUser).Error; err != nil {
		return err
	} else {
		return nil
	}
}

// GetOrder 获取订单记录
func GetOrder(userId int32) ([]*model.Order, error) {
	var records []*model.Order
	cli := db.Get()
	result := cli.Table(orderTableName).
		Where("user_id = ?", userId).
		First(&records)
	return records, result.Error
}

func UpdateOrder(id int32, status string) error {
	cli := db.Get()
	result := cli.Table(orderTableName).Where("id = ?", id)
	if err := result.UpdateColumn("status", status).Error; err != nil {
		log.Error("update updatetime err ", err.Error())
		return err
	}
	return nil
}

// 生成24位订单号
// 前面17位代表时间精确到毫秒，中间3位代表进程id，最后4位代表序号
func Generate(t time.Time) string {
	s := t.Format("20060102150405")
	m := t.UnixNano()/1e6 - t.UnixNano()/1e9*1e3
	ms := sup(m, 3)
	p := os.Getpid() % 1000
	ps := sup(int64(p), 3)
	i := atomic.AddInt64(&num, 1)
	r := i % 10000
	rs := sup(r, 4)
	n := fmt.Sprintf("%s%s%s%s", s, ms, ps, rs)
	return n
}

// 对长度不足n的数字前面补0
func sup(i int64, n int) string {
	m := fmt.Sprintf("%d", i)
	for len(m) < n {
		m = fmt.Sprintf("0%s", m)
	}
	return m
}
