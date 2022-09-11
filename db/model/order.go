package model

import (
	"time"
)

// Order 订单表
type Order struct {
	ID        int32     `gorm:"column:id;primaryKey" json:"id"`                  // 唯一ID
	orderNo   string    `gorm:"column:order_no" json:"orderNo"`                  // 订单号
	name      string    `gorm:"column:name" json:"name"`                         // 公司名称
	license   string    `gorm:"column:license" json:"license"`                   // 统一信用代码
	fullname  string    `gorm:"column:fullname" json:"fullname"`                 // 法人姓名
	wechat    string    `gorm:"column:wechat" json:"wechat"`                     // 法人微信号
	phone     string    `gorm:"column:phone" json:"phone"`                       // 电话号码
	totalFee  string    `gorm:"column:total_fee" json:"totalFee"`                // 订单金额
	CreatedAt time.Time `gorm:"column:created_at;default:null" json:"createdAt"` // 创建时间
	UpdatedAt time.Time `gorm:"column:updated_at;default:null"`                  // 更新时间
}
