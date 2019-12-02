require 'test_helper'

class MlikesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get mlikes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get mlikes_destroy_url
    assert_response :success
  end

end
